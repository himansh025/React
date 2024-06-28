import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementcounter, incrementcounter } from '../features/slicer/counterslicer';

function Counter() {

    const dispatch = useDispatch()
    const selector= useSelector((state)=> state.counter.value)

    // const increase=()=>
    // dispatch(incrementcounter());
    // console.log(dispatch(incrementcounter()));
    
//     const decrese=() => 
//         console.log("clicked");
//    dispatch(decrementcounter());
// //    console.log(dispatch(decrementcounter));
   


    return (
        <>
            <div>Counter is {selector} </div>
            <button  className='bg-blue-500' onClick={()=> dispatch(incrementcounter()) }> increase</button>
            <button  className='bg-blue-500 left-3 m-3' onClick={()=> dispatch(decrementcounter())}> decrease</button>
        </>)
}

export default Counter