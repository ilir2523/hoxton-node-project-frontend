import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { validateUser, postOrder, postToBasketItems } from '../functions/Functions.jsx'
import '../styles/productDetails.css'


function ProductDetails() {
  const params = useParams()

  const [product, setProduct] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    validateUser(setUser)
  }, [])


  useEffect(() => {
    fetch(`http://localhost:4001/items/${params.id}`)
      .then(resp => resp.json())
      .then(productFromServer => setProduct(productFromServer))
  }, [])

  if (product === null) return <main>Loading...</main>

  if (product.title === undefined) return <main>Picture not found</main>

  return (
    <section className="product-detail">
      <div className='image_container'>
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-detail__side">
        <h2>{product.title}</h2>
        {/* <p>
          {product.description}
        </p> */}
        <h1 className="product-price">£{product.price}</h1>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <Link to='/orders'>
          <button onClick={() => postOrder(product.id, user.orders[0].id)}>Order</button>
        </Link>
        <Link to='/cartItems'>
          <button onClick={() => postToBasketItems(product.id, user.id)}>Add to Cart</button> 
        </Link>
      </div>

      <div className='comment_section'>
        <h3>Review For this Product</h3>
        <p>I am really happy i bought this</p>
        <p>Is this new?</p>
        <input type="text" placeholder='Enter your comment' />
      </div>
    </section>
  )
}

export default ProductDetails
