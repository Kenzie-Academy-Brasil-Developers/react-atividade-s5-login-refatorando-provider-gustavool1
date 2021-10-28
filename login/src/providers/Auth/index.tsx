import { createContext, useState, ReactNode } from "react";
import { useHistory } from "react-router"
import {toast} from 'react-toastify'

interface AuthProviderData{
    LogIn: () => void,
    Logout: () => void,
    authToken: string;
}
interface AuthProviderProps{
    children: ReactNode
}
export const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}:AuthProviderProps) =>{
    toast.configure()
    const [ authToken, setAuthToken ] = useState ('')
    const history = useHistory()
    const LogIn = () =>{
        setAuthToken(' ')
        toast.success('Bem vindo')
    }
    const Logout = () =>{
        setAuthToken('')
    }
    return(
        <AuthContext.Provider value={{LogIn,Logout, authToken}}>
            { children }
        </AuthContext.Provider>
    )
}