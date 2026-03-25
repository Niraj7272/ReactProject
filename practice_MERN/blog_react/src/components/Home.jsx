import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Welcome from './Welcome'

const Home = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const uname = localStorage.getItem('uname')
    console.log(token)

    useEffect(()=>{
        if(token===null){
        navigate('/login')
    }
    },[])
    
  return (
    <div>Home
       <Welcome/>
    </div>
  )
}

export default Home