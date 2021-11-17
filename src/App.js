
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NavbarComp from './components/NavbarComp/NavbarComp';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {CartProvider} from 'react-use-cart';
function App() {
  return (
    <div className="App">
     <Router>
     <CartProvider>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product-details/:id" element={<ProductDetails/>} />
        <Route exact path="/Cart" element={<Cart/>} />
      </Routes>
      </CartProvider>
      </Router>
    </div>
  );
}

export default App;
