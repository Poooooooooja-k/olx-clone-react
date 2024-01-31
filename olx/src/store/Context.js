import { createContext, useState } from "react";
import firebaseapp from "../firebase/Config";


export const FirebaseContext=createContext(null)
export const Authcontext=createContext(null)


export default function Context({children,value}){
    const [user,setUser]=useState('hello')
    
    return(
        <FirebaseContext.Provider value={firebaseapp}>
        <Authcontext.Provider value={{user,setUser}}>
            {children}
        </Authcontext.Provider>
        </FirebaseContext.Provider>
       
    )
}   