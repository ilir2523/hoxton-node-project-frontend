import { useEffect, useState } from 'react'
import { validateUser, calculateItemPrice, calculateTotalPrice, postOrder, handleChange, signIn,  } from '../functions/Functions.jsx'
import { Link } from 'react-router-dom'

export default function Basket() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        validateUser(setUser)
    }, [])

    if (user !== null)
        return (
            <section className="basket-container">
                <h2>Your Cart Items</h2>
                <ul>
                    {user.basketItems.map(basketItem => {
                        return (
                            <li key={basketItem.item.id}>
                                <article className="basket-container__item">
                                    <Link to={`/products/${basketItem.item.id}`}>
                                        <img
                                            src={basketItem.item.image}
                                            alt={basketItem.item.title}
                                            width="90"
                                        />
                                    </Link>
                                    <p>{basketItem.item.title}</p>
                                    <p>
                                        Qty: {basketItem.quantity}
                                        <select value={basketItem.quantity} onChange={(e) => {
                                            handleChange(basketItem, e)
                                            validateUser(setUser)
                                        }}>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </p>
                                    <p>Item total: £{calculateItemPrice(basketItem)}</p>
                                    
                                    <Link to='/orders'>
                                        <button onClick={() => postOrder(basketItem.item.id, user.orders[0].id, user.id, basketItem.quantity) }>Order</button>
                                    </Link>
                                </article>
                            </li>
                        )
                    })}
                </ul>
                <h3>Your total: £{calculateTotalPrice(user.basketItems)}</h3>
            </section>
        )

    if (user === null)
        return (
            <div className="signIn-page">
        <header className="signIn-header">
          <h1>Drin</h1>
        </header>

        <div className="signIn-box">
          <h1>Sign-In</h1>
          <form className="signIn-form" id="signInForm"
            onSubmit={e => {
              e.preventDefault()
              // @ts-ignore
              const email = e.target.email.value
              // @ts-ignore
              const password = e.target.password.value
              signIn(email, password, setUser)
            }}
          >
            <label className="signIn-email-label" htmlFor="email">Email</label>
            <input type="email" className="signIn-input" name="email"></input>
            <label className="signIn-password-label" htmlFor="password">Password</label>
            <input type="password" className="signIn-input" name="password"></input>
            <button className="signIn-button" type="submit" form="signInForm">Sign In</button>
          </form>
        </div>
        <div className="brake">
          <h5>New to Drin?</h5>
        </div>
        <div>
          <button className="signUp-button"> <Link to='/signUp'> Create your Drin account </Link></button>
        </div>
      </div>
    )

} 