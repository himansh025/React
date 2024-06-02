import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './bg/background.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background/>
    </>
  );
}

export default App
