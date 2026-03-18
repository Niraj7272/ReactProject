import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

  const [logindt,setLogindt] = useState({
    user_email:'',
    password:'',
  })

  const handleInputChange = (e) => {
    const {name,value}= e.target
        setLogindt({
            ...logindt,
            [name]:value,
        })
  }

  const handleSubmit = async(e)=>{
     e.preventDefault()
            try {
                const res = await axios.post('http://localhost:5000/api/user/userlogin',logindt)
                console.log(res);
            } catch (error) {
                console.error(error);
            }
  }

  return (
    <div>
      <table>
            <tr>
                <td>User Email:</td>
                <td>
                    <input type="text" name='user_email' onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td>Password:</td>
                <td>
                    <input type="password" name='password' onChange={handleInputChange} />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button onClick={handleSubmit}>Login</button>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    If already Register <a href="login">Login here</a> 
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Login