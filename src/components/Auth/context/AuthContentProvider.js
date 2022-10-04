import React, {useState} from "react";
import AuthContext from "./AuthContext";
import Cookies from 'universal-cookie';


import sentRequest from "../../../helpers/api";



export const AuthContextProvider = (props) => {

    const cookies = new Cookies()

    const contextCookie = cookies.get('userContext');

    const [auth, setAuth] = useState({
        isLoggedIn: (contextCookie && contextCookie.isLoggedIn) ? contextCookie.isLoggedIn : false,
        apiToken: (contextCookie && contextCookie.apiToken) ? contextCookie.apiToken : '',
        user: (contextCookie && contextCookie.user) ? contextCookie.user : {}
    })

    const loginHandler = async (email, password) => {

        sentRequest('post', '/user/login',
            JSON.stringify({ email: email, password: password})
        )
        .then((res)=>{
            // console.log(res.data)
            const contexData = {
                isLoggedIn: true,
                apiToken: res.data.token,
                user: res.data.data
            }
            cookies.set('userContext', contexData, {
                path: '/',
                maxAge : 10*60*60
            })
            setAuth(contexData)
        })
        .catch((err)=>{
        console.log(err)
        })
    }


    const logoutHandler = (userId) => {
        //perform logout operation
    }


    return (
        <AuthContext.Provider value={
            {
                isLoggedIn : auth.isLoggedIn,
                apiToken : auth.apiToken,
                onLogin: loginHandler,
                onLogout: logoutHandler,
                user: auth.user
            }
        }>{props.children}</AuthContext.Provider>
    )
}

export default AuthContextProvider