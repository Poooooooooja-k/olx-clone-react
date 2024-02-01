import { createContext, useEffect, useState } from "react";
import firebaseapp from "../firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/Config'


export const FirebaseContext=createContext(null)
export const Authcontext=createContext(null)


export default function Context({children,value}){
    const [user,setUser]=useState('')
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe();
        }
    })
    return(
        <FirebaseContext.Provider value={firebaseapp}>
        <Authcontext.Provider value={{user,setUser}}>
            {children}
        </Authcontext.Provider>
        </FirebaseContext.Provider>
       
    )
}   