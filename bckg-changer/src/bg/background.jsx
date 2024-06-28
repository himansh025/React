import React, { useState } from 'react'


function Background() {
 let [color,setcolor]= useState("pink");
  return (
    <div className=" w-screen h-screen top-0 left-0 my-0 mx-0 bg-orange-500  duration-0 mt-0 " style={{backgroundColor:color}}>
    <h1 className="rounded-md text-md mt-0 py-4 border-2 border-solid  border-black ">background changer app</h1> 
    <div className="mt-5 flex justify-evenly rounded-md flex-wrap"  >
    <button onClick={()=>setcolor("red")} className="bg-red-500 my-3 rounded-md">red</button>
    <button  onClick={()=>setcolor("black")} className="bg-black-500 my-3 rounded-md" >black</button>    
    <button onClick={()=>setcolor("blue")} className="bg-blue-500 my-3 rounded-md" >blue</button>
    <button onClick={()=>setcolor("yellow")} className="bg-yellow-500 my-3 rounded-md" >yellow</button>
    <button onClick={()=>setcolor("pink")} className="bg-pink-500 my-3 rounded-md" >pink</button>
    <button onClick={()=>setcolor("violet")} className="bg-violet-600 my-3 rounded-md " >violet</button>
    </div>
    </div>    

  )
}

export default Background