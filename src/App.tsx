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
import Basket from "./pages/Basket";


import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/items')
      .then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

  function filterProducts(searchValue) {
    let productsList = JSON.parse(JSON.stringify(products))
    if (searchValue !== '') {
      const productsListFilter = productsList.filter(product =>
        product.title.toLowerCase().includes(searchValue)
      )
      setProducts(productsListFilter)
    } else {fetch(`http://localhost:4001/items?search=${searchValue}`)
    .then(resp => resp.json())
    .then(productsFromServer => setProducts(productsFromServer))}
  }

  return (
    <>
      <Header filterProducts={filterProducts}/>
      <Routes>
        <Route index element={<Navigate to='/products' />} />
        <Route path='/categories' element={<Categories products={products} />} />
        <Route path='/products' element={<Products products={products} />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/cartItems' element={<Basket />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App