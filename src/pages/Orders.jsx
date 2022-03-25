import { useEffect, useState } from 'react'
import { validateUser, calculateItemPrice, calculateTotalPrice, signIn } from '../functions/Functions.jsx'
import { Link } from 'react-router-dom'
import '../App.css';

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
                    {user.orders.map((order) => order.orderItems.map(orderItem => {
                        return (
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
                    }))}
                </ul>
                <h3>Your total: £{user.orders.map(order => order.total.toFixed(2))}</h3>
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