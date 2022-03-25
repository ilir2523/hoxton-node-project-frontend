import { useEffect, useState } from "react";
import { validateUser, changePassword} from '../functions/Functions.jsx'
// import { Link } from "react-router-dom";
import "../styles/changePassword.css"

function ChangePassword() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    validateUser(setUser)
  }, [])

  return (
    <div className="account-data" >
      <h1>Change your password:</h1>
      <div className="account-data-box">
        <form className="account-data-form" id="changePasswordForm" 
        onSubmit={e => {
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.lastPassword.value
          const newPassword = e.target.newPassword.value
          changePassword(email, password, newPassword, setUser)
        } 
        }>
        <label className="account-email-label" htmlFor="email">Email:</label>
        <input type="email" className="account-input" name="email" defaultValue={user?.email} ></input>

        <label className="account-lastPassword-label" htmlFor="lastPassword">Last Password:</label>
        <input type="password" className="account-input" name="lastPassword"></input>

        <label className="account-newPassword-label" htmlFor="newPassword">New Password:</label>
        <input type="password" className="account-input" name="newPassword"></input>

        <button className="changePassword-button" type="submit" form="changePasswordForm">Change Password</button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
