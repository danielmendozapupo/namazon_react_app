import React, {useState} from 'react';
import logo from '../src/Component/img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import {Link, useHistory, Redirect} from 'react-router-dom';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import Cookies from 'universal-cookie';
import axios from 'axios'
import userService from "./services/user.service";
import SearchBox from "./Component/SearchBox/SearchBox";



function Header(){
    const history = useHistory();
    const myUser = userService().User;
    const [{basket, loggedInUser}, dispatch] = useStateValue();
    // console.log('My basket', basket)
    const logoutUser = async () =>{
        if(loggedInUser){
           await axios.post('http://localhost:8080/user/logout').then(()=>{
               localStorage.removeItem('user')


           })
            /*await axios.post('http://localhost:8080/user/logout').then(()=>{

                localStorage.removeItem('user')
                /!*history.push('/');*!/
            })*/

        }
    }



    return(
        <nav className='header'>
            <Link to={'/'}>
                <img className= 'header_logo' src={logo} alt={'logo'}/>
            </Link>

            <div className='header_search'>
                <input type='text' className='header_searchInput'/>

                <SearchIcon className={'header_searchIcon'}/>
            </div>


            <div className='header_nav'>
                {/*First Link*/}
                <Link to={!loggedInUser && '/login'} >
                    <div onClick={logoutUser} className='header_option'>
                        <span className="header_optionLineOne"> Hello,  {myUser}</span>
                        <span className="header_optionLineTwo">{loggedInUser ? 'Sign Out' : 'Sign In'}</span>

                    </div>
                </Link>
                {/*Second Link*/}
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className="header_optionLineOne"> Returns</span>
                        <span className="header_optionLineTwo">& Orders </span>
                    </div>
                </Link>
            </div>
            {/*Basket Icon with number*/}
            <Link to='/checkout' className='header_link'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    {/*number of items in the basket*/}
                    <span className='header_optionLineTwo header_productCount'>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}
export default Header;