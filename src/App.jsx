
import "./App.css";
import FilterProducts from "./components/FilterProducts";
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log("user", user)
  console.log("authUser", authUser)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} /> 
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
