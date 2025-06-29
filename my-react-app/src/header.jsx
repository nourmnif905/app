import { ShoppingCart, Search, Smartphone } from "lucide-react";
import "./Header.css";
import { Link } from 'react-router-dom'; 

export default function Header() {
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
          <Link to="/occasion">Accessoires</Link>
          <Link to="/contact">Contact</Link>  
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
        <ShoppingCart className="cart-icon" />
      </div>
    </header>
  );
}
