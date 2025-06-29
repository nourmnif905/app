
import React from "react";
import Productlist from "./productlist.jsx";

const telneufs = [
  {
    id: 1,
    nom: "iPhone 16 Pro Max",
    image: "https://t2.tudocdn.net/729453?w=824&h=494",
    description: "iPhone 16 Pro Max avec puce A18 Bionic, écran 6.9'' et triple caméra.",
    prix: 4399,
  },
  {
    id: 2,
    nom: "Samsung Galaxy S23",
    image: "https://kamounhome.tn/wp-content/uploads/2023/09/SMARTPHONE-SAMSUNG-GALAXY-S23-plus.jpeg",
    description: "Galaxy S23 avec écran AMOLED, 256 Go, caméra pro.",
    prix: 2399,
  }
];

export default function Neufs() {
  return <Productlist produits={telneufs} />;
}
