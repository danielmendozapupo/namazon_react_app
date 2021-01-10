import React, {useState} from 'react';
import './Login.css'
import logo from '../src/Component/img/logo.png'
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';


function Login(){
    const history = useHistory();
    const [login, setLogin]= useState('')
    const [password, setPassword] = useState('')

    // const cookies = new Cookies();

    async function loginuser(event) {
        const loginBody ={
            login: login,
            password: password
        }
        await axios.post('http://localhost:8080/user/login', loginBody).then((response)=>{
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
                console.log('user data localStorage: ',localStorage.getItem('user'));
            }

            history.push("/");
        })


        event.preventDefault();
    }
    const signupuser = event=>{
        event.preventDefault()
        history.push('/register')

    }
    return(
        <div className='login'>
            <Link to={'/'}>
                <img className='login_logo'  src={logo}
                     alt='logo'/>
            </Link>
            <div className='login_container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Username</h5>
                    <input value={login} onChange={event => setLogin(event.target.value)} type='username'/>
                    <h5> Password</h5>
                    <input  value={password} onChange={event => setPassword(event.target.value)} type='password'/>
                    <button onClick={loginuser}   type='submit' className='login_signInButton'>Sign In</button>
                </form>
                <p>By signing in you agree to Dan's Ecommerce Terms and Conditions</p>
                <button onClick={signupuser} className='login_registerButton'>Create your Dan's Ecommerce Account</button>
            </div>
        </div>
    )
}
export default Login;
