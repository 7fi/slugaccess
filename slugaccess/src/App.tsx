import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Map from './pages/Map'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/slugaccess/' element={<Home />} />
        <Route path='/slugaccess/map' element={<Map />} />
      </Routes>
    </>
  )
}
