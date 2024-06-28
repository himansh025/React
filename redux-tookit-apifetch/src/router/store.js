import productreducer, {} from './actions'
import { configureStore } from '@reduxjs/toolkit'
const Store = configureStore({
    reducer :{
        products:productreducer 

    },
})
export default Store;