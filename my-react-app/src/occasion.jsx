import React from "react";
import Productlist from "./productlist";

const occasion = [
  {
    id: 1,
    nom: "iPhone 13",
    image: "https://www.istore.com.tn/4838-home_default/iphone-13-128-go.jpg",
    description: "iPhone 13 en très bon état, 128 Go, batterie à 90%.",
    prix: 1760,
    ancienPrix: 2200,
    solde: "-20%",
    promo: true,
  }
];

export default function Occasion() {
  return <Productlist produits={occasion} />;
}
