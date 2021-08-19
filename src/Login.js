import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    //firebase login............
    auth
      .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if(auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
    //firebase register............

  }

  return (
    <div className="login">
      <Link to='/'>
        <img className="login__logo" src="images/logo.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input 
            type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button 
            className="login__signInButton"
            type="submit"
            onClick={signIn}> Sign In 
          </button>
        </form>

        <button onClick={register}
        className="login__registerButton">Create your Mart Account</button>
      </div>

    </div>
  )
}

export default Login
