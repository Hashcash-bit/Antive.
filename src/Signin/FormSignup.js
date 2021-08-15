import React, { useRef, useState } from "react";
import "./Form.css";
import { useAuth } from "./context/AuthContext";
import { useHistory } from "react-router-dom";
import db from "./firebase";

export default function FormSignup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const userNameRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = userNameRef.current.value;
    signup(email, password, username)
      .then((id) => {
        setLoading(false);
        history.push(`/dashboard`);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };
  
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
            ref={userNameRef}
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

// export default function FormSignup(props) {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const password2Ref = useRef();
//   const userNameRef = useRef();
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { signup } = useAuth();
//   const history = useHistory();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (passwordRef.current.value !== password2Ref.current.value) {
//       return setError("Please Confirm That Your Passwords Match");
//     }

//     if (emailRef.current.value === "") {
//       return setError("Please Type In Your Credentials");
//     }

//     try {
//       setError("");
//       setLoading(true);
//       await signup(emailRef.current.value, passwordRef.current.value)
//       history.push("/dashboard");
//     } catch {
//       setError("Account Creation Was Unsuccessful");
//     }

//     setLoading(false);
//   }
//   return (
//     <div className="form-content-right">
//       <form className="form" onSubmit={handleSubmit}>
//         <h1>Sign Up</h1>
//         <p className="DontAccount">Don't have an account?</p>
//         {error && <p className="error">{error}</p>}
//         <div className="form-inputs">
//           <label className="form-label">Username</label>
//           <input
//             className="form-input"
//             type="text"
//             name="username"
//             placeholder="Enter your Username"
//             ref={userNameRef}
//             required
//           />
//         </div>
//         <div className="form-inputs">
//           <label className="form-label">Email</label>
//           <input
//             className="form-input"
//             ref={emailRef}
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="form-inputs">
//           <label className="form-label">Password</label>
//           <input
//             className="form-input"
//             ref={passwordRef}
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <div className="form-inputs">
//           <label className="form-label">Confirm Password</label>
//           <input
//             className="form-input"
//             ref={password2Ref}
//             type="password"
//             name="password2"
//             placeholder="Confirm your password"
//             required
//           />
//         </div>
//         <button disabled={loading} className="form-input-btn" type="submit">
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// }
