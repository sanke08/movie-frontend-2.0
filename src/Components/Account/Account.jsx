import React, { useEffect, useState } from 'react';
import "./Account.css"
import { Box, Button, HStack, Image, Text, } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
// import img from "../assets/home.jpg"
import { useNavigate } from "react-router-dom";
import { logout } from '../../actions/authAction';
import { BiUserCircle } from 'react-icons/bi';
import Loader from "../Loader/Loader"




function Account() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const { user } = useSelector((state) => state.user)

    const logoutHandle = () => {
        dispatch(logout())
        navigate("/signin")
    }

    setTimeout(() => {
        setLoading(false)
    }, 1000);


    useEffect(() => {
        if (!user) {
            navigate("/signin")
        }
    }, [user, navigate])


    return ( 
        <>
            {loading ? <Loader /> :
                <>
                    <button className='account-btn' onClick={logoutHandle}>Logout</button>
                    <div className='account'>
                        <div className="account-container" >
                            <div className='account-avatar' >
                                {/* <Image src={img} w={"10rem"} h={"10rem"} borderRadius={"50%"} /> */}
                                <BiUserCircle size={"5rem"} />
                            </div>
                            <div className='account-info'  >
                                <Text>Name  : {user && user.name} </Text>
                                <Text>Email : {user && user.email} </Text>
                                {/* <Box marginTop={["1rem", "3rem"]}>
                                    <Button w={"fit-content"}>Favourate</Button>
                                </Box> */}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>

    );
}

export default Account;
