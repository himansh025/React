import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Query() {
    const dispatch = useDispatch();
    const [input, setinput] = useState("");

    const q = useSelector(state => state.query.queries)
    console.log("data : ",q);
    return (
        <>
            <h1> Query</h1>
            <h3>add query :  </h3>
            <input type="text" value={input} onChange={()=>setinput(e.target.value)} />
            <button onClick={() => dispatch({input})}> add</button>
        </>

    )
}




export default Query