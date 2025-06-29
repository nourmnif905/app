import React from "react";
import { ShoppingCart } from "lucide-react";
import "./productlist.css";

export default function Productlist({ produits }) {

  function ajouterAuPanier(produit) {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    const indexProduit = panier.findIndex(p => p.id === produit.id);

    if (indexProduit !== -1) {
      panier[indexProduit].quantite = (panier[indexProduit].quantite || 1) + 1;
    } else {
      panier.push({ ...produit, quantite: 1 });
    }

    localStorage.setItem("panier", JSON.stringify(panier));
    window.dispatchEvent(new Event("panierChange"));
  }

  return (
    <section className="cards-container">
      {produits.map((item) => (
        <div
          key={item.id}
          className="cards"
          style={{ position: "relative" }}
        >
          {item.promo &&  (
            <span className="badge-solde">{item.solde}</span>
          )}

          <img src={item.image} alt={item.nom} className="card-image-top" />

          <div className="card-content-vertical">
            <h3>{item.nom}</h3>
            <p>{item.description}</p>

            <div className="card-footer">
              {item.promo && (
                <span className="old-price">{item.ancienPrix} DT</span>
              )}

              <span className="price">{item.prix} DT</span>

              <button 
                className="btn-ajouter"
                onClick={() => ajouterAuPanier(item)}
              >
                <ShoppingCart size={16} style={{ marginRight: "6px" }} /> Ajouter
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
