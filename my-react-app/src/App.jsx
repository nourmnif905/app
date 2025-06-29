import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCard from './ProductCard';
import Card from './ProductCard';
import Footer from './Footer';
import './index.css';
import Neufs from './neufs';
import Accessoires from './accessoires';
import Occasion from './occasion';
import Contact from './contact';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path= '/' element={<><ProductCard/> </> }/>
        <Route path="/neufs" element={<Neufs/>}/>
        <Route path="/accessoires" element={<Accessoires/>}/>
        <Route path="/occasion" element={<Occasion/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
