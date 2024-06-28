import { useEffect,useState } from "react";
function Usecurrencyinfo(currency){


    const [data,setdata]= useState({})

useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((result) => result.json())
    .then((result)=> setdata(result.data))
console.log(data);    
},[currency])  
return data
;}
export default Usecurrencyinfo;
