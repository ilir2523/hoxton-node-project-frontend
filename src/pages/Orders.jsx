import { useEffect, useState } from 'react'
import { validateUser, calculateItemPrice, calculateTotalPrice } from '../functions/Functions.jsx'
import { Link } from 'react-router-dom'

export default function Orders() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        validateUser(setUser)
    }, [])

    if (user !== null)
        return (
            <section className="basket-container">
                <h2>Your Orders</h2>
                <ul>
                    {user.orders.map(order => {
                        return(
                        <li key={order.item.id}>
                            <article className="basket-container__item">
                            <Link to={`/products/${order.item.id}`}>
                                <img
                                    src={order.item.image}
                                    alt={order.item.title}
                                    width="90"
                                />
                            </Link>
                            <p>{order.item.title}</p>
                            <p>
                                Qty: {order.quantity}
                                {/* <select value={basketItem.quantity} onChange={(e) => {
                                    handleChange(basketItem, e)
                                }}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select> */}
                            </p>
                            <p>Item total: £{calculateItemPrice(order)}</p>
                            </article>
                        </li>
                        )
                    })}
                </ul>
                <h3>Your total: £{calculateTotalPrice(user.orders)}</h3>
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