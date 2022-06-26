import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Pages } from './pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pages/>
    </div>
  )
}

export default App
