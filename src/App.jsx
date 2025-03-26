
import "./App.css";
import FilterProducts from "./components/FilterProducts";
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";




const App = () => {
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
