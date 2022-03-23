import { useEffect, useState } from 'react'
import { validateUser, calculateItemPrice, calculateTotalPrice } from '../functions/Functions.jsx'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Orders() {
    const [user, setUser] = useState(null)
    console.log(user)

    useEffect(() => {
        validateUser(setUser)
    }, [])

    if (user !== null)
        return (
            <section className="basket-container">
                <h2>Your Orders</h2>
                <ul>
                {console.log(user.orders[0].orderItems)}
                    {user.orders[0].orderItems.map(orderItem => {
                        return(
                        <li key={orderItem.item.id}>
                            <article className="basket-container__item">
                            <Link to={`/products/${orderItem.item.id}`}>
                                <img
                                    src={orderItem.item.image}
                                    alt={orderItem.item.title}
                                    width="90"
                                />
                            </Link>
                            <p>{orderItem.item.title}</p>
                            <p>
                                Qty: {orderItem.quantity}
                            </p>
                            <p>Item total: £{(orderItem.item.price * orderItem.quantity)}</p>
                            </article>
                        </li>
                        )
                    })}
                </ul>
                <h3>Your total: £{user.orders[0].total}</h3>
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