import "./Signin.css"
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link, } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../actions/authAction'
import Loader from "../Loader/Loader"
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { CLEAR_ERROR } from '../../constance/constance'






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
        <div className="signin" >
          <div>
            <div className="sign-container">
              <h2>Sign in</h2>
              <input className="auth-inp" type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
              <input className="auth-inp" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
              <button className="auth-btn" onClick={handelsubmit}>Signin</button>
            </div>
            <div className="sign-nav">
              <p>
                Create new account
              </p>
              <Link to={"/signup"}>
                <div className="link">
                  Sign up
                </div>
              </Link>

            </div>
          </div>
        </div>
      }
    </>
  )
}
