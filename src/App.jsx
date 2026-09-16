import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Store from "./pages/Store/Store"
import Layout from "./components/Layout/Layout"
import Product from "./pages/Product/Product"
import Cart from "./pages/Cart/Cart"
import { AppContextProvider } from "../context/AppContext"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

function App() {
  return (
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} /> 
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Layout>  
  )
}

export default App;
