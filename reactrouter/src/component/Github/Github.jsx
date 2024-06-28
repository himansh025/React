import React, { useState } from 'react'
import { useEffect } from 'react'
function Github() {
    const [data ,setdata]= useState([])
    useEffect(()=>{
fetch("https://api.github.com/users/himansh025").then( Response => Response.json()
).then(data => 
    {
        console.log(data);
     setdata(data)   
    }
)
    },[]
)
  return (
    <>
    <div className="bg-gray-500 text-white  text-center flex items-center justify-between px-3 py-3 text-3xl" > Github followers : {data.followers} 
        <img  className="border-solid border-2 border-black rounded-3xl " src={data.avatar_url} alt="picture"   width={{style:"100px"}} />
    </div>
    </>
  )
}

export default Github