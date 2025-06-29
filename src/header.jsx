import { ShoppingCart, Search, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function majCount() {
      const panier = JSON.parse(localStorage.getItem("panier")) || [];
      // Somme des quantités
      const totalQuantite = panier.reduce((acc, item) => acc + (item.quantite || 1), 0);
      setCount(totalQuantite);
    }

    majCount(); // au chargement

    window.addEventListener("panierChange", majCount);

    return () => window.removeEventListener("panierChange", majCount);
  }, []);

  return (
    <header className="header">
      <div className="left">
        <div className="logo">
          <Smartphone size={24} />
          <span>TechPhone</span>
        </div>
        <nav className="nav">
          <Link to="/">Accueil</Link>
          <Link to="/neufs">Neufs</Link>
          <Link to="/occasion">Occasion</Link>
          <Link to="/accessoires">Accessoires</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/panier">Panier</Link>
        </nav>
      </div>

      <div className="right">
        <div className="search-container">
          <Search className="search-icon" size={16} />
          <input
            type="text"
            placeholder="Rechercher un téléphone..."
            className="search-input"
          />
        </div>
        <Link to="/panier" className="cart-link">
          <ShoppingCart className="cart-icon" />
          {count > 0 && <span className="cart-count">{count}</span>}
        </Link>
      </div>
    </header>
  );
}
