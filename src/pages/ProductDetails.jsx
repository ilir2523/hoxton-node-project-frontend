import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { validateUser, postToBasketItems, createComment, fetchProduct } from '../functions/Functions.jsx'
import '../styles/productDetails.css'
import '../App.css'

function ProductDetails() {
  const params = useParams()

  const [product, setProduct] = useState(null)
  const [user, setUser] = useState(null)
  console.log(product)

  useEffect(() => {
    validateUser(setUser)
  }, [])

  useEffect(() => {
    fetchProduct(params, setProduct) 
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
      <div className="detail">
        <div className="product-detail__side" >
          <h2>{product.title}</h2>
          {/* <p>
          {product.description}
        </p> */}
          <h1 className="product-price">£{product.price}</h1>
          <Link to='/cartItems'>
            <button onClick={() => postToBasketItems(product.id, user.id)}>Add to Cart</button>
          </Link>
        </div>

        <div className='comment_section'>
          <section>
            <h3>Review For this Product</h3>
            <ul>
              {product.Comment.map(comment => 
              <li key={comment.id}>
                <p>{comment.user.name}: "{comment.comment}"</p>
              </li>)}
            </ul>
          </section>

          <form
            className='detailsForm'
            name='form'
            onSubmit={function (event) {
              if (user !== null) {
                event.preventDefault()
                const content = event.target.comment.value
                createComment(content, user?.id, product.id )
                fetchProduct(params, setProduct)
                event.target.reset()
              } else {
                alert("Please Sign-in first.")
                event.preventDefault()
                event.target.reset()
              }
            }}>
            <input
              type="text"
              name='comment'
              placeholder='Write your comment'
            />
            <button className='detailsButton' htmlFor="form">Post</button>
          </form>
        </div>
      </div>



    </section>
  )
}

export default ProductDetails
