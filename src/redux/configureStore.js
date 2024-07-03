import { configureStore } from '@reduxjs/toolkit'
import Products  from './product'
import Cart from './Cart'
import Category from './Category'
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        Products,
        Cart,
        Category
    }
})