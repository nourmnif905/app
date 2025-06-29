
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Contactez-nous</h2>
      <p className="contact-subtitle">
        Une question ? Besoin d'aide ? N'hésitez pas à nous écrire.
      </p>

      <div className="contact-content">
        <form className="contact-form">
          <label>
            Nom complet
            <input type="text" placeholder="Votre nom" required />
          </label>
          <label>
            Adresse e-mail
            <input type="email" placeholder="votre@email.com" required />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Écrivez votre message ici..." required />
          </label>
          <button type="submit">Envoyer le message</button>
        </form>

        <div className="contact-info">
          <h3>Informations</h3>
          <p><strong>📍 Adresse :</strong> Rue de la Technologie, Tunis</p>
          <p><strong>📞 Téléphone :</strong> +216 55 123 456</p>
          <p><strong>📧 Email :</strong> support@techphone.tn</p>
          <p><strong>🕒 Heures :</strong> Lun - Sam : 9h - 18h</p>
        </div>
      </div>
    </div>
  );
}
