import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Store from "./pages/Store/Store"
import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"
import Product from "./pages/Product/Product"


function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/product/:id" element={<Product />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App;
