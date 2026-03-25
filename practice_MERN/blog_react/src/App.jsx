import { useEffect, useState } from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import TestBlock from './components/TestBlock'
import Registration from './components/Registration'
import Home from './components/Home'
import axios from 'axios'

function App() {

  const token = localStorage.getItem('token')

  const [tokendt,setTokendt] = useState({
    token
  })

  useEffect(()=>{
    const checkToken = async()=>{
      try {
        const res = await axios.post('http://localhost:5000/api/user/checktoken',tokendt)
        console.log(res)
        if(res.data.tokensts===1){
          localStorage.removeItem('token')
          localStorage.removeItem('uname')
        }
      } catch (error) {
        console.error(error)
      }
    }
    checkToken()
  },[])

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<Registration/>}/>
       <Route exact path='/login' element={<Login/>}/> 
       <Route exact path='/home' element={<Home/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
