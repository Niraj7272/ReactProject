import { useState } from 'react'
import Login from './components/Login'
import TestBlock from './components/TestBlock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <TestBlock/>
    </>
  )
}

export default App
