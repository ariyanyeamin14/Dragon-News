import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        return (signOut(auth)
            .then(() => {
            }).catch((error) => {
                // An error happened.
            })
        )
        
    }

    const updateUserProfile = (info) =>{
        return updateProfile(auth.currentUser, info)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        loading,
        updateUserProfile
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;