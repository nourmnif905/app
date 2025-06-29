import React from "react";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import "./Admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-container">
         <Sidebar />
      <main className="admin-main-content">
        <Dashboard />
      </main>
    </div>
  );
}
