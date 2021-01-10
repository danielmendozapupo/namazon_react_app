import React from 'react';
import Fresh_fruit from '../img/Fresh_fruits.png';
import '../Item/Item.css'
import {useStateValue} from "../../StateProvider";
const Item =({products}) =>{    // extracting the value from props using {} within the parenthesis
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: products._id,
                title: products.title,
                image: Fresh_fruit,
                price: products.price,

            },
        });

    };


    return(
        <div className='item'>

            <div className='item_info'>
                <p>{products.title}</p>
                <div className='describe_'>
                    <p className={'item_cat'}>{`Category: ${products.type}`}</p>
                    <p className={'item_price'}>{`Price: $${products.price}`}</p>
                    <p>{`Quantity: ${products.quantity}`}</p>
                </div>
                {/*<p>{`Description: ${products.description}`}</p>*/}
            </div>
            <img src={Fresh_fruit} alt={products.title}/>

            <button onClick={addToBasket} type="">
                {/* {" "} */}
                Add to Basket
            </button>
        </div>

    )
}
export default Item;