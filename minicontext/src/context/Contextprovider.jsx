import React, { useState } from "react";
import usercontext from "./Context";
const Contextprovider =({children})=>{
const [user,setuser]= useState("")
return(
<usercontext.Provider value={{user,setuser}}>

{children}

</usercontext.Provider>
)
}

export default Contextprovider