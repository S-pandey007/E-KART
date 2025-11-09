import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from '../modules/Home/api/slice';
import categoriesReducer from '../modules/categories/api/slice';
import cartReducer from '../modules/cart/api/slice'
export default combineReducers({
    home:homeReducer,
    categories:categoriesReducer,
    cart:cartReducer
})