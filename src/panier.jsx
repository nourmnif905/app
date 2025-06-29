import React, { useEffect, useState } from "react";
import "./Panier.css";

export default function Panier() {
  const [panier, setPanier] = useState([]);
  const [sousTotal, setSousTotal] = useState(0);

  const taxeFixe = 10;
  const remisePourcentage = 5;

  // Charger le panier au démarrage et écouter les changements externes
  useEffect(() => {
    function majPanier() {
      const updated = JSON.parse(localStorage.getItem("panier")) || [];
      setPanier(updated);
      calculerSousTotal(updated);
    }

    majPanier();

    window.addEventListener("panierChange", majPanier);
    return () => window.removeEventListener("panierChange", majPanier);
  }, []);

  // Calcul du sous-total selon quantite et prix
  function calculerSousTotal(listeProduits) {
    const total = listeProduits.reduce(
      (acc, item) => acc + (item.prix || 0) * (item.quantite || 1),
      0
    );
    setSousTotal(total);
  }

  // Supprimer une unité du produit ou supprimer le produit si quantité = 1
  function supprimerProduit(indexASupprimer) {
    let nouveauPanier = [...panier];
    const quantite = nouveauPanier[indexASupprimer]?.quantite || 1;

    if (quantite > 1) {
      nouveauPanier[indexASupprimer].quantite = quantite - 1;
    } else {
      nouveauPanier.splice(indexASupprimer, 1);
    }

    setPanier(nouveauPanier);
    localStorage.setItem("panier", JSON.stringify(nouveauPanier));
    calculerSousTotal(nouveauPanier);
    window.dispatchEvent(new Event("panierChange"));
  }

  const remise = (sousTotal * remisePourcentage) / 100;
  const totalFinal = sousTotal - remise + taxeFixe;

  return (
    <div className="panier-page">
      <div className="produits">
        <h2>🛒 Mon Panier</h2>
        {panier.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          panier.map((item, index) => (
            <div key={index} className="panier-item">
              <img src={item.image} alt={item.nom} width="70" />
              <div className="panier-details">
                <h4>
                  {item.nom}{" "}
                  <span style={{ fontWeight: "normal" }}>
                    x{item.quantite || 1}
                  </span>
                </h4>
                <p>{((item.prix || 0) * (item.quantite || 1)).toFixed(2)} DT</p>
              </div>
              <button
                className="btn-annuler"
                onClick={() => supprimerProduit(index)}
              >
                Annuler
              </button>
            </div>
          ))
        )}
      </div>

      <div className="facture">
        <h3>🧾 Facture</h3>
        <div className="facture-ligne">
          <span>Sous-total :</span>
          <span>{sousTotal.toFixed(2)} DT</span>
        </div>
        <div className="facture-ligne">
          <span>Remise ({remisePourcentage}%) :</span>
          <span className="remise">-{remise.toFixed(2)} DT</span>
        </div>
        <div className="facture-ligne">
          <span>Taxes :</span>
          <span className="taxe">+{taxeFixe.toFixed(2)} DT</span>
        </div>
        <hr />
        <div className="facture-ligne total">
          <strong>Total :</strong>
          <strong>{totalFinal.toFixed(2)} DT</strong>
        </div>
        <button className="btn-commander">Commander</button>
      </div>
    </div>
  );
}
