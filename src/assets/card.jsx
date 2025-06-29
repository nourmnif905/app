import "./ProductCard.css";
import { Star, RotateCcw, Tag } from "lucide-react";

export default function ProductCard() {
  return (
    

    <div className="cards-container">
      <Card
        title="Téléphones Neufs"
        description="Derniers modèles avec garantie"
        icon={<Star size={32} />}
        label="Garantie Constructeur"
        color="blue"
        link="/neufs"
      />

      <Card
        title="Téléphones d'Occasion"
        description="Qualité vérifiée, prix avantageux"
        icon={<RotateCcw size={32} />}
        label="% Jusqu'à -50%"
        color="green"
        link="/occasion"
      />

      <Card
        title="Promotions"
        description="Offres limitées et exclusives"
        icon={<Tag size={32} />}
        label="Nouveautés & promos"
        color="orange"
        link="/promotions"
      />
    </div>
  );
}


  
