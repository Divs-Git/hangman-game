import { Route, Routes } from 'react-router-dom'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
    </Routes>
  )
}

export default App
