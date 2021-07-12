import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../Signin/context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './dashboard.css'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div className='UP-Card'>
        <div className='UP-Container'>
          <h2 className="titleProfile">Profile</h2>
          {error && <p className='error'>{error}</p>} 
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="UpdateProfileBTN">
            Update Profile
          </Link>
        </div>
        <div className="LogoutBtn">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </div>
      
      
    </>
  )
}