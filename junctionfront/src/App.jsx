import { useState } from 'react'

import './App.css'

function App() {

  const [value, setValue] = useState('');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1>Sense the motion</h1>

      </div>

    </>
  )
}

export default App
