import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from './Page/HomePage'
import SignUp from "./Page/SignUp"
import SignIn from "./Page/SignIn"
import ForgotPassword from './Page/ForgotPassword'
import About from './Page/About'
import Contact from './Page/Contact'
import Profile from './Page/Profile'
import Narbar from './Component/Narbar'
import VerifyEmail from './Page/VerifyEmail'
import CreateCourse from './Page/createCourse'
import UserList from './Page/UserList'
import UserDetail from './Page/UserDetail'
import CourseList from './Page/CourseList'
import CourseDetail from './Page/CourseDetail'
import CourseExplore from './Page/CourseExplore'
import UserLayout from './layout/UserLayout'
import CoursePage from './Page/CoursePage'
import AdminLayout from './layout/AdminLayout'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} /> {/* home page */}
        <Route path='/signUp' element={<SignUp />} /> {/* sign up page */}
        <Route path='/signIn' element={<SignIn />} /> {/* sign ip page */}
        <Route path='/forgot-password' element={<ForgotPassword />} /> {/*  page */}
        <Route path='/about' element={<><Narbar /><About /></>} />{/* about page show up general infomatio nabout web */}
        <Route path='/contact' element={<><Narbar /><Contact /></>} />{/* page to contact with admin */}
        <Route path='/userProfile' element={<><Narbar /><Profile /></>} />{/* */}
        <Route path='/coursePage' /> {/* page show up list of course */}
        <Route path='/service' element={<><Narbar /></>} />{/*service*/}
        <Route path='/verifyEmail' element={<VerifyEmail />} />{/*access when user didnt verify email*/}
        <Route path='/createCourse' element={<CreateCourse/>} />{/*access when user didnt verify email*/}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={<Navigate to="/admin/user/list" replace />}
          />
          <Route path="user">
            <Route
              index
              element={<Navigate to="/admin/user/list" replace />}
            />
            <Route path="list" element={<UserList />} />
            <Route path=":id" element={<UserDetail />} />
          </Route>
          <Route path="course">
            <Route
              index
              element={<Navigate to="/admin/course/list" replace />}
            />
            <Route path="list" element={<CourseList />} />
            <Route path=":id" element={<CourseDetail />} />
          </Route>
        </Route>
        <Route path="course" element={<UserLayout />}>
          <Route index element={<Navigate to="/course/list" replace />} />
          <Route path="list" element={<CourseExplore />} />
          <Route path=":id" element={<CoursePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
