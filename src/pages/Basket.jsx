import { useEffect, useState } from 'react'
import { validateUser, calculateItemPrice, calculateTotalPrice } from '../functions/Functions.jsx'
import { Link } from 'react-router-dom'

export default function Basket() {
    const [user, setUser] = useState(null)
    console.log(user)

    useEffect(() => {
        validateUser(setUser)
    }, [])

    if (user !== null)
        return (
            <section className="basket-container">
                <h2>Your Cart Items</h2>
                <ul>
                    {user.basketItems.map(basketItem => {
                        return(
                        <li key={basketItem.id}>
                            <article className="basket-container__item">
                            <Link to={`/products/${basketItem.id}`}>
                                <img
                                    src={basketItem.item.image}
                                    alt={basketItem.item.title}
                                    width="90"
                                />
                            </Link>
                            <p>{basketItem.item.title}</p>
                            <p>
                                Qty: {basketItem.quantity}
                                {/* <select value={basketItem.quantity} onChange={(e) => {
                                    handleChange(basketItem, e)
                                }}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select> */}
                            </p>
                            <p>Item total: £{calculateItemPrice(basketItem)}</p>
                            </article>
                        </li>
                        )
                    })}
                </ul>
                {/* <h3>Your total: £{calculateTotalPrice(user.orders.orderItems)}</h3> */}
            </section>
        )

    if (user === null)
        return (
            <div className="signOut-div">
                <h1>Sing in to se your orders.</h1>
                <button className="signOut-button">
                    <Link to='/signIn'>
                        SignIn
                    </Link>
                </button>
            </div>
        )

} 