import { combineReducers } from "redux";

import CakeReducer from "./CAKE/CakeReducre";
import IceCreamReducer from "./ICE-CREAM/IceCreamReducer";
import CoffeReducer from './COFFE/CoffeReducer'





const rootReducer  = combineReducers({
    cake: CakeReducer,
    IceCream: IceCreamReducer,
    coffee: CoffeReducer
   
})

export default rootReducer