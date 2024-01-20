import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUs"
import NotFound from './Pages/NotFound';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUsPage />}></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </>
  )
}

export default App
