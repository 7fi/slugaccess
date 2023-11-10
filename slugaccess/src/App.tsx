import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Hello from './pages/Hello'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/slugaccess/' element={<Home />} />
        <Route path='/slugaccess/hello' element={<Hello />} />
      </Routes>
    </>
  )
}
