import  {React, createContext,useContext } from "react";
export const ThemeContext = createContext(
    {
        theme : "light",
        darktheme :() =>{
        
        }
        ,
        lighttheme: ()=>{
         
        },

    
    
    }
 ) 

 export const Themeprovider = ThemeContext.Provider 

 export default function Usetheme()
    {
        return useContext(ThemeContext)
    }
