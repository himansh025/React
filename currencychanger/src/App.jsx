import { useState } from 'react'
import Usecurrencyinfo from './hooks/Hooks'
import  InputBox  from './Components/Input-box'
import  './App.css'

function App() {
  const [amount ,setamount]=useState(1);
  const [from,setfrom]=useState("usd")
  const [to,setto]=useState("inr")
  const[amountconvert,setamountconvert]=useState("")
const currencyinfo = Usecurrencyinfo(from)
const option = Object.keys(currencyinfo)

const swap=()=>{
  setfrom(to)
  setto(from)
}

const convert= ()=>{
  setamountconvert(amountconvert*currencyinfo[to])
}
const currencychange= (e)=>{
    setamount(e.target.value)

}





  return (
    <>
   
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage:`url('https://images.pexels.com/photos/23235110/pexels-photo-23235110/free-photo-of-a-person-walking-down-the-stairs-in-front-of-a-large-glass-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                value={amount}
                                // amount ={amount}
                                oncurrencychange={currencychange}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                
                            />
                            
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

   
    </>
  )}
export default App
