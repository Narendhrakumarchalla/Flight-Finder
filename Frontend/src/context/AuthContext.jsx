import React, { Children, createContext, useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:4000/api';
console.log("base",baseUrl);

axios.defaults.baseURL=baseUrl;

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [users, setUsers] = useState([])
    const [usersCount, setUsersCount ] = useState(0); 
    const role = user?.role;
    const checkAuth = async ()=>{
        try {
            const {data} = await axios.get('/auth/me');
            if(data.success){
                setUser(data.user)
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    //login
    const login = async(state, userData)=>{
        try {
            const endPoint = state === 'login' ? '/auth/login' : '/auth/register';
            const {data} = await axios.post(endPoint, userData)
            console.log(data);

            if(data.success){
                setUser(data.user);
                axios.defaults.headers.common['token'] = data.token;
                setToken(data.token);
                localStorage.setItem('token', data.token)
            }
            
        } catch (error) {
            console.error(error.message);
        }
    }
    
    //logout
    const logout = async ()=>{
        try {
           localStorage.removeItem('token');
           setToken(null)
           setUser(null) 
        } catch (error) {
            console.error(error.message);           
        }
    }

    const getUsers = async ()=>{
        try {
            const {data} = await axios.get("/users/all-users");
            if(data.success){
                setUsers(data.users)
                setUsersCount(data.users.length)
                console.log(data);
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        if(!token){
           return;
        }
        axios.defaults.headers.common['token'] = token
        checkAuth()
    },[token])

    useEffect(() => {
        if (token && role === 'admin' || role === 'operator') {
            getUsers();
        }
    }, [token,role]);

    const value={
        axios,
        user,
        users,
        token,
        usersCount,
        role,
        setUsers,
        setToken,
        setUser,
        checkAuth,
        login,
        logout,
        getUsers,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider