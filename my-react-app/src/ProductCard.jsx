import { Star, RotateCcw, Tag } from "lucide-react";
import "./ProductCard.css";

export default function ProductCards() {
  return (
    <>
     <section className="hero">
       
      <h1>Bienvenue chez TechPhone</h1>
      <p>Les meilleurs smartphones neufs et d’occasion à portée de clic</p>
      <button className="btn" onClick={() => {
         document.getElementById("cards").scrollIntoView({ behavior: "smooth" });
       }}>
        Voir nos modèles
      </button>

      
    </section>
      <section id="cards" className="cards-container">
        <Card
          title="Téléphones Neufs"
          description="Derniers modèles avec garantie"
          icon={<Star size={32} />}
          label="Garantie Constructeur"
          labelColor="green"
          image="https://img.freepik.com/vecteurs-libre/image-smartphone-transparente_1284-8368.jpg?ga=GA1.1.1738306114.1728214259&semt=ais_hybrid&w=740"
          link="/neufs"
        />
        <Card
          title="Téléphones d'Occasion"
          description="Qualité vérifiée, prix avantageux"
          icon={<RotateCcw size={32} />}
          label="% Jusqu'à -50%"
          labelColor="orange"
          image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fm=jpg&q=60&w=3000"
          link="/occasion"
        />
        <Card
          title="Accessoires Téléphone"
          description="Étuis, chargeurs, écouteurs et plus"
          icon={<Tag size={32} />}
          label="Nouveautés"
          labelColor="green"
          image="https://i.ytimg.com/vi/TrPJnsHq5IQ/hq720.jpg"
          link="/accessoires"
        />
      </section>

      <section className="services">
        <Service
          img="https://cdn-icons-png.flaticon.com/512/3578/3578303.png"
          title="Livraison Rapide"
          subtitle="Livraison gratuite sous 48h pour toute commande"
        />
        <Service
          img="https://img.freepik.com/vecteurs-premium/changer-image-vectorielle-icone-peut-etre-utilise-pour-documents-fichiers_120816-39893.jpg"
          title="Retour 14 Jours"
          subtitle="Satisfait ou remboursé pendant 14 jours"
        />
        <Service
          img="https://cdn-icons-png.flaticon.com/512/5203/5203546.png"
          title="Support 7/7"
          subtitle="Équipe support disponible tous les jours"
        />
      </section>
    </>
  );
}

function Card({ title, description, icon, label, labelColor, image, link }) {
  return (
    <a href={link} className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="icon">{icon}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <span className={`badge ${labelColor}`}>{label}</span>
        <span className="arrow">→</span>
      </div>
    </a>
  );
}

function Service({ img, title, subtitle }) {
  return (
    <div className="service">
      <img src={img} alt={title} className="service-icon" />
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
}
