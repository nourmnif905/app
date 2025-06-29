import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Neufs from './neufs';
import Accessoires from './accessoires';
import Occasion from './occasion';
import Contact from './contact';
import AdminLayout from "./admin/adminlayout";
import './index.css';

function LayoutWrapper({ children }) {
  
  
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/neufs" element={<Neufs />} />
          <Route path="/accessoires" element={<Accessoires />} />
          <Route path="/occasion" element={<Occasion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
