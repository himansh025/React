import {React,useContext,useState }from "react";
import Usercontext from "../context/Context";


function Login() {
const [username,setusername]= useState("")
const [password,setpassword]= useState("")
const {setuser}= useContext(Usercontext)
const handlebutton=(e)=>{
e.preventDefault()
setuser({username,password})

}

  return (
<div>
<h1>login page</h1>
<input type="text" placeholder="enter your username" value={username} onChange={ (e)=> setusername(e.target.value) } />
<input type="text" placeholder="enter your password" value={password} onChange={ (e)=> setpassword(e.target.value) } />
<button onClick={handlebutton} >submit</button>


</div>  

)

}

export default Login