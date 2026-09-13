import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Store from "./pages/Store/Store"
import Layout from "./components/Layout/Layout"
import Product from "./pages/Product/Product"
import Cart from "./pages/Cart/Cart"
import { AppContextProvider } from "../context/AppContext"

function App() {
  return (
    <AppContextProvider> 
        <Layout> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/product/:id" element={<Product />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </AppContextProvider> 
  )
}

export default App;
