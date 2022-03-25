import "./SignIn.css"
import { useEffect, useState } from "react";
import { validateUser, signUp, signOut } from '../functions/Functions.jsx'
import { Link } from "react-router-dom";

export default function SignUp() {
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
                    <h1>Create account</h1>
                    <form className="signIn-form" id="signUpForm"
                        onSubmit={e => {
                            e.preventDefault()
                            // @ts-ignore
                            const name = e.target.userName.value
                            // @ts-ignore
                            const email = e.target.email.value
                            // @ts-ignore
                            const password = e.target.password.value
                            signUp(email, password, name, setUser)
                        }}
                    >
                        <label className="signIn-email-label" htmlFor="userName">Your name</label>
                        <input type="userName" className="signIn-input" name="userName"></input>
                        <label className="signIn-email-label" htmlFor="email">Email</label>
                        <input type="email" className="signIn-input" name="email"></input>
                        <label className="signIn-password-label" htmlFor="password">Password</label>
                        <input type="password" className="signIn-input" name="password"></input>
                        <button className="signIn-button" type="submit" form="signUpForm"> Sign Up</button>
                    </form>
                </div>
                <div className="brake">
                    <h5>Already have an account?</h5>
                </div>
                <div>
                    <button className="signUp-button"> <Link to='/signIn'>Sign in</Link> </button>
                </div>
            </div>
        )
    if (user != null) {
        return (
            <>
        <div className="signOut-div">
          <h1>Your Account {user.name}!!!</h1>
          <div className="navigate-bar">

            <Link to="/"> <img src='https://images-ext-2.discordapp.net/external/Qp5m5RjFHPIXkwucq6LZGp77zhF6aKa_Sc7f56SVjjg/https/cdn-icons-png.flaticon.com/512/609/609803.png'></img>
            Home</Link>
            <Link to='/categories'>
            <img src='https://cdn-icons-png.flaticon.com/512/3843/3843517.png'></img>
              Categories </Link>
            <Link to='/orders' ><img src='https://cdn-icons-png.flaticon.com/512/3500/3500833.png'></img>
            Orders</Link>
            <Link to='/cartItems' >
            <img src='https://cdn-icons-png.flaticon.com/512/891/891462.png'></img>
              Cart</Link>
            <Link to='/changePassword' >
            <img src='https://cdn-icons.flaticon.com/png/512/2665/premium/2665311.png?token=exp=1648203090~hmac=3be414bbdf124f401fd25b2cb5bad7d4'></img>
              Change Password</Link>
            <Link to='#' onClick={() => signOut(setUser)}>
            <img src='https://cdn-icons-png.flaticon.com/512/1828/1828490.png'></img>
               Sign Out </Link>
          </div>
        </div>
      </>
        )
    }
}