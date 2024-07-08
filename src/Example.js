import {Mycontext} from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";
export default function Example(){
    //provider
    const[text,setText]=useState("")
    return(
        <div>
            <Mycontext.Provider value={{text,setText}}>
                <Mycomponent>
                    

                </Mycomponent>

            </Mycontext.Provider>

        </div>

    )
}