import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Router, Routes   } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/movies" element={<h1>Movies</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App