import React, { useRef, useState } from "react";
import "./Form.css";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";
import db from "./firebase";




export default function FormSignup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const history = useHistory();
  
  

  async function handleSubmit(e) {
    e.preventDefault();     
    console.log(username, email, password)

    if (passwordRef.current.value !== password2Ref.current.value) {
      return setError("Please Confirm That Your Passwords Match");
    }

    if (emailRef.current.value === "") {
      return setError("Please Type In Your Credentials");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value).then((cred) => {
        db.collection('users').doc(cred.user.uid).set({
          Username: username,
          Email: email,
          Password: password,
        }).then(() => {
          setUsername("")
          setEmail("")
          setPassword("")
          setPassword2("")
        })
      })
      
      history.push("/dashboard");
    } catch {
      setError("Account Creation Was Unsuccessful");
    }

    setLoading(false);
  }
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p className="DontAccount">Don't have an account?</p>
        {error && <p className="error">{error}</p>}
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            ref={password2Ref}
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
            required
          />
        </div>
        <button disabled={loading} className="form-input-btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

