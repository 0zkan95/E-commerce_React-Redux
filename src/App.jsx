
import "./App.css";
import FilterProducts from "./components/FilterProducts";
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
import { useSelector } from "react-redux";



const App = () => {

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("cart: " , cart);
  console.log("Total Amount: " , totalAmount);
  console.log("Total Price: " , totalPrice);
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route 
            path={"/filteredProducts/:type"} 
            element={<FilterProducts />} /> 
          <Route 
            path={"/filteredProducts/:type/:id"} 
            element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
