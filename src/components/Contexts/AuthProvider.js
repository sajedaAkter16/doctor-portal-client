import React, { Children, createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
 
    // user create 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // update user info
  const  updateUser=(name,photoURL,phoneNumber)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL,
            phoneNumber:phoneNumber
        })
    }

    // signin

    const signin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout
    const logOut=()=>{
        setLoading(true)
      return  signOut(auth)
    }
    const verifyEmail=()=>{
        return sendEmailVerification(auth.currentUser)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>unsubscribe();
    },[])
    const authInfo={createUser,signin,verifyEmail,logOut,user,updateUser,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;