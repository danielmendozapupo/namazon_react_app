import React from 'react';
import './ProductCart.css';
import {useStateValue} from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
/*import {REMOVE_FROM_CART} from "./types";*/

function ProductCart({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    /*console.log('the id value: ', id)
    console.log('The basket items id: ', basket[0].id)*/
     const removeItem = ()=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,

        });
    }
    return(
        <div className={'productcart'}>
            <img className={"productcart_image"} src={image} alt={''}/>
            <div className={'productcart_info'}>
                <p className={'productcart_title'}>{title}</p>
                <p className={'productcart_price'}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/*<div className={'productcart_rating'}>
                    {
                        Array(rating)
                            .fill()
                            .map((_)=>(
                                <StarIcon className="product_starIcon" />
                            ))
                    }
                </div>*/}
                <button onClick={removeItem}> Remove from the Cart</button>
            </div>
        </div>
    )
}

export default ProductCart;