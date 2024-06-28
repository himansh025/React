import { configureStore } from '@reduxjs/toolkit';
import todoreducer from '../features/slicer/todoSlice';
// import queryreducer from '../features/query' 
// import counterslicer from '../features/slicer/counterslicer';

const store= configureStore({
     reducer: todoreducer,
    //  counter : counterslicer,
    // query :queryreducer ,

})

export default store;
