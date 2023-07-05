import React, { useContext, createContext, useState, useEffect } from "react";


interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    esAutentico: false,

})

export function AuthProvider({children}: AuthProviderProps){

    const [esAutentico,setEsAutentico]=useState(false);

    return (
        <AuthContext.Provider value= {{esAutentico}}>
            {children}
        </AuthContext.Provider>
    );
    
}

export const useAuth = () => useContext(AuthContext);