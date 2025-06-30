import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
  const {login} = useContext(AuthContext);

  const [currentState, setCurrentState] = useState('register')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      role
    };
    console.log('User Data:', userData);
    login(currentState,userData);
    setName(''); 
    setEmail('');
    setPassword('');
    setRole("user")
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">{currentState === 'register' ? "Register" : "Login" }</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <div className="mb-4">
          {
            currentState === "register" && 
            <>
                <label className='block text-gray-700 mb-2' htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
            </>
          }
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          {
            currentState === "register" && 
            <>
                <label className='block text-gray-700 mb-2' htmlFor="role">Role</label>
                <select
                  id="role"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-md"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="user">User</option>
                  <option value="operator">Operator</option>
                </select>
            </>
          }
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 cursor-pointer"
        >
          {currentState === "register" ? "Register" : "Login"}
        </button>
        <div className="mt-4 text-center">
          {
            currentState === "register" ? 
            <p className="text-gray-600">Already have an account? 
              <span onClick={()=>setCurrentState('login') } className="text-blue-500 hover:underline cursor-pointer">
                Login
              </span>
            </p> : 
            <p className="text-gray-600">Don't have an account? 
              <span onClick={()=> setCurrentState('register')} className="text-blue-500 hover:underline cursor-pointer">
                Register
              </span>
            </p>
          }
        </div>
      </form>
    </div> 
  )
}

export default LoginPage