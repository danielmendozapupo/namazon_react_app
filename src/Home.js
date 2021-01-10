import React, {useState} from 'react'
import Fresh_fruits from './Component/img/Fresh_fruits.png'
import Product from './Product'
import './Home.css'
import ItemList from "./Component/ItemList/ItemList";
import Header from "./Header";
import SearchBox from "./Component/SearchBox/SearchBox";

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            products:[],
            searchField: ''
        }

    }
    async componentDidMount(){
        const resp = await fetch('http://localhost:8080/StoreItem')
        const products = await resp.json()
        this.setState({products})
    }

    handleChange =(e)=> {
        this.setState({searchField: e.target.value})
    }
    render(){
        const {products, searchField} = this.state
        const {isLog} = this.state;
        const filteredItems = products.filter(product =>(
            product.title.toLowerCase().includes(searchField.toLowerCase())
        ))
        return (

            <div className="home">

                <img className='home_image' src={"https://cdn.pixabay.com/photo/2020/05/31/19/55/cyber-5244009_1280.png"} alt=''/>
                {/*<h1>Namazon</h1>*/}

                <div className='home_row'>

                    {/*<SearchBox placeholder="Enter Item name ..." handleChange={this.handleChange}/>*/}
                    <ItemList products={filteredItems}/>
                </div>


            </div>
        );
    }
}
export default Home;
