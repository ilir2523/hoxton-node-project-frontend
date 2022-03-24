import "./SignIn.css"
import { useEffect, useState } from "react";
import { validateUser, signUp, signOut } from '../functions/Functions.jsx'
import { Link } from "react-router-dom";

export default function SignUp() {
    const [user, setUser] = useState(null)
    console.log(user)

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
                    <h1>Do you want to sign out {user.name}?</h1>
                    <button className="signOut-button" onClick={() => signOut(setUser)}>Sign Out</button>
                </div>
            </>
        )
    }
}