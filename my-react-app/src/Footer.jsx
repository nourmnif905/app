import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo">📱 TechPhone</h2>
            <p>Votre spécialiste en smartphones neufs et d'occasion. Qualité garantie, prix compétitifs.</p>
    
          </div>

          <div className="footer-section links">
            <h3>Produits</h3>
            <ul>
              <li><a href="#">Téléphones Neufs</a></li>
              <li><a href="#">Téléphones d'Occasion</a></li>
              <li><a href="#">Accessoires</a></li>
              <li><a href="#">Garanties</a></li>
            </ul>
          </div>

          <div className="footer-section links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Centre d'aide</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Retours</a></li>
              <li><a href="#">Garantie</a></li>
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Recevez nos dernières offres et nouveautés</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Votre email" />
              <button>📩</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 TechPhone. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

