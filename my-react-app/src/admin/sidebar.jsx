import React from "react";
import { Home, Settings, Box, Calendar, Mail, User } from "react-feather";

export default function Sidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">Techphone Admin</div>
      <ul className="sidebar-menu">
        <li className="active"><Home size={18} /> Dashboard</li>
        <li><Settings size={18} /> Configuration</li>
        <li><Box size={18} /> Produits</li>
        <li><Calendar size={18} /> Commandes</li>
        <li><Mail size={18} /> Contacts</li>
      </ul>
      <div className="sidebar-footer">© 2025 Techphone Admin</div>
    </div>
  );
}
