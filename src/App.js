import React, { useEffect } from 'react';
import { Box, } from "@chakra-ui/react"
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Watch from './Components/Watch';
import SignIn from './Components/SignIn';
import Signup from './Components/Signup';
import Account from './Components/Account.jsx';
import Contact from './Components/Contact.jsx';
import { loadUser } from './actions/authAction';
import AdminsPage from './Components/AdminsPage';
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



function App() {
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])


  return (
    <>
      <BrowserRouter>
        <Box >
          <ToastContainer />
          <Navbar />
          <Box display={"flex"} w={"100%"} >
            <Menu />
            <Box>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/watch/:id" element={<Watch />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/account' element={<Account />} />
                <Route path='/admin' element={<AdminsPage />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </Box>
          </Box >
        </Box>
      </BrowserRouter>
    </>

  );
}

export default App;
