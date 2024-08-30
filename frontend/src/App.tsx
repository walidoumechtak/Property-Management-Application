import { useState } from 'react'
import AuthModal from './components/AuthModal'
import { useGeneralStore } from './stores/generalStore'
import './App.css'


function App() {
  const isLoginOpen = useGeneralStore((state) => state.isLoginOpen)
  return (
    <div>
      {
        isLoginOpen && <AuthModal />
      }
    </div>
  )
}

export default App