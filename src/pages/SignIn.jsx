import "./SignIn.css"
import { useEffect, useState } from "react";
import { validateUser, signIn, signOut } from '../functions/Functions.jsx'
import { Link } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState(null)
  console.log(user)

  useEffect(() => {
    validateUser(setUser)
  }, [])

  if (user === null)
    return (
      <div className="signIn-page">
        <header className="signIn-header">
          <h1>Cramazon</h1>
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
            <button className="signIn-button" type="submit" form="signInForm" >Sign In</button>
          </form>
        </div>
        <div className="brake">
          <h5>New to Cramazon?</h5>
        </div>
        <div>
          <button className="signUp-button"> <Link to='/signUp'> Create your Cramazon account </Link></button>
        </div>
      </div>
    )

  if (user != null) {
    return (
      <>
        <div className="signOut-div">
          <h1>Do you want to sign out {user.name}?</h1>
          <button className="signOut-button" onClick={() => signOut(setUser)}>Sign Out</button>
        </div>
      </>
    )
  }
}