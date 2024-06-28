import {configureStore} from '@reduxjs/toolkit'

import productReducer from './Reducers/Products'
export const store = configureStore({
    reducer : {
        Products : productReducer,
    }
})