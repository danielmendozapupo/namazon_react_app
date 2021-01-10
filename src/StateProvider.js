import React,{createContext, useContext, useReducer} from "react";

//Preparing the data layer
export const StateContext = createContext();

//wrap our components, provide the provider
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//This is how we can use it inside of a component
export const useStateValue =()=>useContext(StateContext);
