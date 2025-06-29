import React from "react";
import Productlist from "./productlist";

const accessoires = [
  {
    id: 1,
    nom: "Smart Watch X10",
    image: "https://img.tvcmall.com/dynamic/uploads/details/740x740_680502452B-6.webp",
    description: "Montre connectée avec suivi santé, notifications, Bluetooth et autonomie 10 jours.",
    prix: 299,
  },
  {
    id: 2,
    nom: "Casque Bluetooth JBL",
    image: "https://i.ebayimg.com/images/g/IJ8AAOSwVAVhcyyX/s-l1600.jpg",
    description: "Casque audio sans fil JBL, réduction de bruit active, autonomie 25h, micro intégré.",
    prix: 179,
  }
];

export default function Accessoires() {
  return <Productlist produits={accessoires} />;
}