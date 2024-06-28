import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addtodo } from '../features/slicer/todoSlice'

function AddTodo() {

  const [input ,setinput] = useState("")
  const dispatch = useDispatch()
//   dispatch use reducer to changes the values in the store
const addtodohandler =()=>{
    console.log("input :",input)
    const obj = {
      text:input
    }
    dispatch(addtodo(obj))
setinput("") 
}

  return (
    <>
    <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e)=>setinput(e.target.value)
        }
        
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        onClick={addtodohandler}
      >
        Add Todo
      </button>
    </>
  )
}

export default AddTodo