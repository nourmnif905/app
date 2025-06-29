import React, { useState, useEffect } from "react";
import "./Config.css";

export default function Config() {
  const [config, setConfig] = useState({
    address: "",
    phone: "",
    email: "",
    hours: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("contactinfo");
    if (saved) {
      setConfig(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("contactinfo", JSON.stringify(config));
    alert("Configuration enregistrée avec succès!");
  };

  return (
    <div className="config-page">
      <h2>Configuration du site</h2>
      <form className="config-form" onSubmit={handleSave}>
        <label>
          Adresse
          <input
            type="text"
            name="address"
            value={config.address}
            onChange={handleChange}
            
            required
          />
        </label>

        <label>
          Téléphone
          <input
            type="text"
            name="phone"
            value={config.phone}
            onChange={handleChange}
            
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={config.email}
            onChange={handleChange}
            
            required
          />
        </label>

        <label>
          Heures d'ouverture
          <input
            type="text"
            name="hours"
            value={config.hours}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
