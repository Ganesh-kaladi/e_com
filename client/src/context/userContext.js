import { useContext, useState, createContext } from "react";

const UserContext = createContext()

const ContextProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = ()=>useContext(UserContext)

export { useUser, ContextProvider}