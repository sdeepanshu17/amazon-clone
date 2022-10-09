import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isDisabled, setDisabled] = useState(false);

    function signIn(event) {
        event.preventDefault();

        // console.log(event);
        setDisabled(true);
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history("/");
        }) .catch(error => alert(error.message));
    }

    function register(event) {
        event.preventDefault();
        console.log(event);
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // console.log(auth)
            if (auth){
                history("/");
            }
        }) .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to="/">
            <img className='login-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
        <div className="login-container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" onChange={e => setEmail(e.target.value)} value={email} />

                <h5>Password</h5>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} name="" id="" />

                <button type='submit' disabled={isDisabled} onClick={signIn} className='login-signinBtn'>{isDisabled ? 'Signing In..' : 'Sign In'}</button>

                <p>By signing in you agree to AMAZON CLONE Conditions of Use and Sale. Please see out Privacy Notice, our Cookies Notice and our Interest-Based Ad Notice</p>

                <button onClick={register} className='login-registerBtn'>Create your Amazon account</button>
            </form>
        </div>
    </div>
  )
}

export default Login