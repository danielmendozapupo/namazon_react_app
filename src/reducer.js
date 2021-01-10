//import {ADD_TO_BASKET, REMOVE_FROM_CART, SET_LOGIN} from "./types";

export const initialState = {
    basket:[],
    loggedInUser: null
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action)=>{
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.item] };

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            }
        case 'SET_LOGIN':
            return{
                ...state,
                loggedInUser: action.user
            }

        case 'REMOVE_FROM_CART':
            //LOGIC for removing item to basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id} as its not in the cart!`);
            }

            return { ...state, basket: newBasket };

            default:
            return state;

    }
}



export default reducer;