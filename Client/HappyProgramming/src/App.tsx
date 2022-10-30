import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Page/HomePage'
import SignUp from "./Page/SignUp"
import SignIn from "./Page/SignIn"
import ForgotPassword from './Page/ForgotPassword'
import About from './Page/About'
import Contact from './Page/Contact'
import Profile from './Page/Profile'
import Narbar from './Component/Narbar'
import VerifyEmail from './Page/VerifyEmail'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} /> {/* home page */}
          <Route path='/signUp' element={<SignUp />} /> {/* sign up page */}
          <Route path='/signIn' element={<SignIn />} /> {/* sign ip page */}
          <Route path='/forgot-password' element={<ForgotPassword />} /> {/*  page */}
          <Route path='/about' element={<><Narbar/><About/></>} />{/* about page show up general infomatio nabout web */}
          <Route path='/contact' element={<><Narbar/><Contact/></>} />{/* page to contact with admin */}
          <Route path='/userProfile' element={<><Narbar/><Profile/></>} />{/* */}
          <Route path='/coursePage' /> {/* page show up list of course */}
          <Route path='/service' element={<><Narbar/></>}/>{/*service*/}
          <Route path='/verifyEmail' element={<VerifyEmail/>}/>{/*access when user didnt verify email*/}
        </Routes>
      </BrowserRouter>
  )
}

export default App
