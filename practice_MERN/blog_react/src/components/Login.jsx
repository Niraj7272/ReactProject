import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [msg, setMsg] = useState(null);

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
                if(res.data.sts===0){
                  localStorage.setItem('token',res.data.token)
                  localStorage.setItem('uname',res.data.user_name)
                  // setMsg(res.data.msg)
                  navigate('/home');
                }else if (res.data.sts===1){
                  setMsg(res.data.msg)
                }else{
                  setMsg(res.data.msg)
                }
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
                <td colSpan={2} align='center' style={{color:'red'}}>
                    {msg}
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