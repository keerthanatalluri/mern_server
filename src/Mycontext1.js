import {createContext} from "react";
export const Mycontext1=createContext("")
export const Mycontextprovider=({childComp})=>{
    const[localDB,setDB]=useState([])
    return(
        <Mycontext1.Provider
        value={{localDB,setDB}}>
           {childComp} 
        </Mycontext1.Provider>
    )
}
