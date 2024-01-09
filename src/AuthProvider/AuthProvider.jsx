
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

  const auth = getAuth(app)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState("loading")
  const provider = new GoogleAuthProvider()
   

  const createUser = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = () => {
    setIsLoading(true)
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    setIsLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false)
      setUser(currentUser)
    })

    return () => {
      unSubscribe()
    }
  }, [])


    const userInfo = {
      user,
      setUser,
      isLoading,
      setIsLoading,
      createUser,
      signIn,
      logOut,
      googleLogin
    }
  return <AuthContext.Provider value={userInfo}>
    {children}
    
    </AuthContext.Provider>;
};