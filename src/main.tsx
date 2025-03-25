import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import ErrorScreen from './routes/ErrorScreen.tsx'
import GameScreen from './routes/GameScreen.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter basename='/im-gonna-gif'>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="*" element={<ErrorScreen/>}/>
        <Route path="/game/:gameCd" element={<GameScreen/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
