import {useContext } from "react";
import {Mycontext } from "./Mycontext";
export default function Mycomponent(){
    const{text,setText}=useContext(Mycontext)
    return(
        <div>
          
            <button onClick={()=>setText("")}> click me</button>
        </div>

    )
    
}