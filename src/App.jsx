import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUs"
import NotFound from './Pages/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUsPage />}></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </>
  )
}

export default App
