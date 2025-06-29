// src/admin/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Settings, Box, Calendar, Mail } from "react-feather";
import "./Admin.css";

export default function Sidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">Techphone Admin</div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin" end className={({ isActive }) => isActive ? "active" : ""}>
            <Home size={18} /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/config" >
            <Settings size={18} /> <span>Configuration</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/produits" className={({ isActive }) => isActive ? "active" : ""}>
            <Box size={18} /> <span>Produits</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/commandes" className={({ isActive }) => isActive ? "active" : ""}>
            <Calendar size={18} /> <span>Commandes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/contacts" className={({ isActive }) => isActive ? "active" : ""}>
            <Mail size={18} /> <span>Contacts</span>
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-footer">© 2025 Techphone Admin</div>
    </div>
  );
}
