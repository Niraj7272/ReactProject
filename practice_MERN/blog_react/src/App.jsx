import { useState } from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import TestBlock from './components/TestBlock'
import Registration from './components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route exact path='/' element={<Registration/>}/>
       <Route exact path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
