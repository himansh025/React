import { useId } from "react";

function InputBox({
    // label is used bcs for input curreency from to the currency

    label,
    amount,
    onAmountchange, //to change the amount //
    oncurrencychange, //tochange the curency//
    currencyoption = [],  //currency in array 
    selectcurrency = "use",
    amoutdisable=false,  //user can change the amount
    currencydisable= false,

    className = "",
}) {
    const amountinputid= useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountinputid}  className="text-black/40 mb-2 inline-block" >
                   {label}
                </label>
                <input
                    id={amountinputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amoutdisable}
                    value={amount}
                    onChange={(e)=>onAmountchange &&
                        onAmountchange(Number(e.target.value))

                    }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                 onChange={(e)=>{
                    oncurrencychange &&
                    oncurrencychange(e.target.value)
                 }}
                 disabled={currencydisable}
                >
                    
                       {currencyoption.map((currency)=> (
<option key={currency} value={currency}>{currency}</option>)  
//if we want performance in the loop for repeat of the elements then we have to use the keys
// use id if  using database
                       )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox
