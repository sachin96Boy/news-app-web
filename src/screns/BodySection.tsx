import { Routes, Route } from 'react-router-dom'
import HomeScreen from './HomeScreen'

function BodySection() {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen />}  />
    </Routes>
  )
}

export default BodySection