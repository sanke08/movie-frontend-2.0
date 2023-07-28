import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link, } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../actions/authAction'
import Loader from "./Loader"
import {  useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { CLEAR_ERROR } from '../constance/constance'






export default function SignIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, user, error } = useSelector((state) => state.user)


  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const handelsubmit = async (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    navigate('/account')
  }



useEffect(() => {
  if (user) {
    navigate("/account")
  }
  if (error) {
    toast.error(error, {
      theme: "dark",
      position: "top-center",
      autoClose: 2000,
      draggable: true,
      closeOnClick: true
    })
    dispatch({ type: CLEAR_ERROR })
  }
}, [navigate, user, error, dispatch])



return (
  <>
    {loading ? <Loader /> :
      <Box w={"87vw"} h={["70vh", "80vh"]} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
        <Box borderColor={"ActiveBorder"} border={"1px"} p={"2rem"}>
          <form method='post'>
            <VStack>
              <Text marginBottom={"1rem"}>Signin</Text>
              <Input placeholder='email' type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder='password' type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
              <Button type='submit' onClick={handelsubmit} >Sign in</Button>
            </VStack>
          </form>
        </Box>
        <Box marginRight={"12rem"} marginTop={"1rem"}>
          <Text fontSize={"0.7rem"}>Create Account?</Text>
          <Link to={"/signup"}>
            <Button size={"sm"} variant={"link"}>Signup</Button>
          </Link>
        </Box>
      </Box>
    }
  </>
)
}
