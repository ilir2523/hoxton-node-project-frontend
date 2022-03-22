import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import ProductDetails from "./pages/ProductDetails.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";


import { useEffect, useState } from 'react';
import { Category } from '@material-ui/icons';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/items')
      .then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Navigate to='/products' />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/products' element={<Products products={products} />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/basket' element={<Orders />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App