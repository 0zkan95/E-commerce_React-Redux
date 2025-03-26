
import "./App.css";
import FilterProducts from "./components/FilterProducts";
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route 
            path={"/filteredProducts/:type"} 
            element={<FilterProducts />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
