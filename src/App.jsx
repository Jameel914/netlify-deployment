import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(`${import.meta.env.VITE_JAMEEL_VAR}`);
  return (
    <>
      <div>Jameel Ibrahim</div>
      <div>secret code is {import.meta.env.VITE_JAMEEL_VAR}</div>
    </>
  )
}

export default App
