import React, { useEffect } from 'react';
import { Box, } from "@chakra-ui/react"

import Home from './Components/Home/Home';
import Watch from './Components/Watch/Watch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./app.css"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';
import { loadUser } from "./actions/authAction"
import Account from './Components/Account/Account';
import SignIn from './Components/Signin/SignIn';
import Signup from './Components/Signup/Signup';
import AdminPage from './Components/AdminPage/AdminPage';
import Upload from './Components/Upload/Upload';
import Users from './Components/Users/Users';


function App() {
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])


  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <div style={{ display: "flex" }}>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={<Account />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path="/upload" element={<Upload />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
