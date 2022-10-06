import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Page/HomePage'
import SignUp from "./Page/SignUp"
import SignIn from "./Page/SignIn"
import ForgotPassword from './Page/ForgotPassword'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}/> {/* home page */}
        <Route path='/signUp' element={<SignUp/>}/> {/* sign up page */}
        <Route path='/signIn' element={<SignIn/>}/> {/* sign ip page */}
        <Route path='/forgot-password' element={<ForgotPassword/>}/> {/*  page */}
        <Route path="userProfile"/>
        <Route path='/about'/>{/* about page show up general infomatio nabout web */}
        <Route path='contact'/>{/* page to contact with admin */}
        <Route path='/coursePage'/> {/* page show up list of course */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
