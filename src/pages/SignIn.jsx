import "./SignIn.css"
import { useEffect, useState } from "react";
import { validateUser, signIn, signOut } from '../functions/Functions.jsx'
import { Link } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    validateUser(setUser)
  }, [])

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

  if (user != null) {
    return (
      <>
        <div className="signOut-div">
          <h1>Welcome to Drin website {user.name}!!!</h1>
          <div className="navigate-bar">

            <Link to="/">Home</Link>
            <Link to='/categories'>Categories </Link>
            <Link to='/orders' >Orders</Link>
            <Link to='/cartItems' >Cart</Link>

          </div>

          <div className="navigate-bar">
            <Link to='/changePassword'>Change Password</Link>
            <Link to='#' onClick={() => signOut(setUser)}> Sign Out </Link>
          </div>

          {/* <div className="account-data" >
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <form >
              <label>Change your password:</label>
              <input></input>
              <input></input>
              <input></input>
              <button></button>
            </form>
          </div> */}
        </div>
      </>
    )
  }
}