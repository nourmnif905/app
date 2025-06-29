import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import Config from "./config"; // importe la page config
import "./Admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="admin-main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/config" element={<Config />} />
          {/* Tu pourras ajouter d'autres routes ici comme /products, /messages... */}
        </Routes>
      </main>
    </div>
  );
}

