import { useEffect, useState } from 'react'
import { validateUser, calculateItemPrice, calculateTotalPrice, postOrder, handleChange } from '../functions/Functions.jsx'
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
                                    {console.log(basketItem.item.id)}
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