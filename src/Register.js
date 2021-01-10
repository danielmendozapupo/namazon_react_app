import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import logo from "./Component/img/logo.png";
import axios from "axios";
import './Register.css'

function Register(){
    const history = useHistory();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    async function registerUser(event){
        const registerBody ={
            firstName: firstName,
            lastName: lastName,
            email: email,
            login: login,
            password: password
        }
        await axios.post('http://localhost:8080/user',registerBody).then(resp=>{

            history.push('/login');
        })
        /*.catch(err=>{
            console.log(err);
            alert(err);
        })*/
        event.preventDefault();
    }
    return(
        <div className='register'>
            <Link to={'/'}>
                <img className='register_logo'  src={logo}
                     alt="logo Dan's Ecommerce"/>
            </Link>
            <div className='register_container'>
                <h1>Welcome!</h1>
                <h2>Registration time!</h2>
                <form>
                    <h5>First name</h5>
                    <input value={firstName} onChange={event=> setFirstName(event.target.value)} type='firstName'/>
                    <h5>Last name</h5>
                    <input value={lastName} onChange={event=> setLastName(event.target.value)} type='lastName'/>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=> setEmail(event.target.value)} type='email'/>
                    <h5>Username</h5>
                    <input value={login} onChange={event=> setLogin(event.target.value)} type='username'/>
                    <h5> Password</h5>
                    <input  value={password} onChange={event => setPassword(event.target.value)} type='password'/>
                    <button onClick={registerUser} type='submit' className='register_submitInButton'>Register</button>
                </form>
                <p>By signing in you agree to Dan's Ecommerce Terms and Conditions</p>

            </div>
        </div>
    )

}
export default Register;