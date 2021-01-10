import React from 'react';
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({products}) =>{ // extracting the value from props using {} within the parenthesis
    return(
        <div className='itemList'>
            {
                products.map(product =><Item key={product._id} products={product}/>)
            }
        </div>
    )
}
export default ItemList;