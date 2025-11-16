import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './form/Login'
import Signup from './form/Signup'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<><h1>Home</h1></>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/Register" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
