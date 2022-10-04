import React from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    apiToken : '',
    onLogin: (email, password)=>{},
    onLogout: (userId)=>{},
    user: {}
})


export default AuthContext

