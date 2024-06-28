import React  from "react";
import { useDispatch } from "react-redux";
const FEATCHREQUEST= { type : "REQUEST IS PROCESSING"}
const FEATCHSUCCESS= { type : "REQUEST  "};
const FEATCHERROR= { type : " error"};
const FEATCHTHEDATA = async()=>{
try {
    const response= await fetch("https://dummyjson.com/products");
    const data= await response.json();
    console.log(data);
    return useDispatch(type= "SUCCESS",action.data)
} catch (error) {
console.error("error");    
}
}

export default FEATCHTHEDATA;

