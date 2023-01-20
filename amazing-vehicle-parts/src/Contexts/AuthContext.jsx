

import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

const initialState = {
    isAuth:false,
    token: null
}

function AuthContextProvider({children}) {
    const [authState,setAuthState] = useState(initialState);

    const loginUser = (val) => {
        setAuthState({...authState,isAuth:true,token: val});
    }

   const logoutUser = () => {
    setAuthState(initialState);
   }

   return(
    <AuthContext.Provider value={{authState,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
   )

}

export default AuthContextProvider;