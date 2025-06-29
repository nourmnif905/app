import React from "react";
import { Users, Coffee, Mail, TrendingUp, Settings, Box, Calendar, Mail as MailIcon } from "react-feather";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card"><Users /><div><h3>15</h3><p>commandes </p></div></div>
        <div className="stat-card"><Box/><div><h3>42</h3><p>Produits</p></div></div>
        <div className="stat-card"><Mail /><div><h3>8</h3><p>Nouveaux messages</p></div></div>
        <div className="stat-card"><TrendingUp /><div><h3>127</h3><p>Visites aujourd'hui</p></div></div>
      </div>

      <h2>Accès rapide</h2>
      <div className="quick-actions">
        <button><Settings size={16} /> Configuration</button>
        <button><Box size={16} /> Gestion du produits</button>
        <button><Calendar size={16} /> Commandes</button>
        <button><MailIcon size={16} /> Contacts</button>
      </div>
    </div>
  );
}
