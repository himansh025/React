// import { Children } from "react";

    const reactelement= {
        type :"a",
        props : {
            href : "https://google.com",
            target : '_blank'

        },
        Children : "click me to visit google"
    }


//  function customrender(reactelement,rootelement){
//      let dom = document.createElement(reactelement.type)
//  dom.innerHTML= reactelement.Children;
//  dom.setAttribute("href",reactelement.props.href);
//  dom.setAttribute("target",reactelement.props.target);
//  rootelement.appendChild(dom);
//  }

    function customrender(reactelement,rootelement){
        const dom= document.createElement(reactelement.type);
        dom.innerHTML= reactelement.Children;
    for(const prop in reactelement.props ) 
        { 
            // if(reactelement.props.hasOwnProperty(prop)){    //choice//
        dom.setAttribute(prop,reactelement.props[prop]);  
    // } 
        }
        rootelement.appendChild(dom);
    }





    

    let rootelement = document.getElementById("root");
    customrender(reactelement,rootelement);