import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    
    const [user ,setUser]=useState(null);
    const [loading ,setLoading]=useState(true);

    const provider = new GoogleAuthProvider();

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateNameAndPhoto = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
          })
    }

    const GoogleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        localStorage.removeItem('labour-token')
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    }, []);



    const authInfo = {
        login,
        createAccount,
        user,
        loading,
        updateNameAndPhoto,
        logOut,
        GoogleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;