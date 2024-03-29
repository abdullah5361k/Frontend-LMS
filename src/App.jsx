import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUs"
import NotFound from './Pages/NotFound';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import CourseList from './Pages/Courses/CourseList';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
import CourseDescription from './Pages/Courses/CourseDescription';
import CreateCourse from './Pages/Courses/CreateCourse';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditProfile';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUsPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/courses' element={<CourseList />}></Route>
        <Route path='/course/description' element={<CourseDescription />}></Route>
        <Route path='/create/course' element={<CreateCourse />}></Route>

        <Route path='/user/profile' element={<Profile />} ></Route>
        <Route path='/user/editprofile' element={<EditProfile />} ></Route>

        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/denied' element={<Denied />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
    </>
  )
}

export default App
