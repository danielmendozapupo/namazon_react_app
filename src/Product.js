/*
import React from 'react';
import './Product.css'
import {useStateValue} from "./StateProvider";
import {ADD_TO_BASKET} from "./types";

function Product({id, title, image,price, rating}){
    const [{basket}, dispatch] = useStateValue()

    console.log('basket content ', basket)

    const addToBasket = ()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    }
    return(
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_id'>{id}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) =>(
                                <p>*</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt = ""/>
            <button onClick={addToBasket}> Add to Basket</button>
        </div>
    )
}
export default Product;*/

import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";
import StarIcon from '@material-ui/icons/Star';


function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };

    return (
        <div className="product">
            <div className="product_info">
                <p> {title} </p>
                <p className="product_price">
                    <small>$</small>
                    <strong> {price} </strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <StarIcon className="product_starIcon" />
                        ))}
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket} type="">
                {/* {" "} */}
                Add to Basket
            </button>
        </div>
    );
}
export default Product;