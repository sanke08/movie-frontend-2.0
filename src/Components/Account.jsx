import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, Image, Text, } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
// import img from "../assets/home.jpg"
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"
import { logout } from '../actions/authAction';
import { BiUserCircle } from 'react-icons/bi';





function Account() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
const [loading,setLoading]=useState(true)

    const { user } = useSelector((state) => state.user)

    const logoutHandle=()=>{
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
                    <Button right={0} position={"absolute"} margin={"1rem"} onClick={logoutHandle}>Logout</Button>
                    <Box w={"85vw"} display={"flex"} justifyContent={"center"} marginTop={["5rem"]}>
                        <Box display={"flex"} flexDir={["column", "row"]} gap={["0rem", "0rem"]} w={"100%"} justifyContent={"space-around"} >
                            <Box w={["100%", "50%"]} display={"flex"} justifyContent={"center"}>
                                {/* <Image src={img} w={"10rem"} h={"10rem"} borderRadius={"50%"} /> */}
                                <BiUserCircle size={"5rem"}/>
                            </Box>
                            <Box w={["90%", "50%"]} display={"flex"} justifyContent={"center"} marginLeft={"1rem"}  flexDir={"column"} marginTop={["2rem", "0rem"]} >
                                <Text>Name  : {user.name} </Text>
                                <Text>Email : {user.email} </Text>
                                {/* <Box marginTop={["1rem", "3rem"]}>
                                    <Button w={"fit-content"}>Favourate</Button>
                                </Box> */}
                            </Box>
                        </Box>
                    </Box>
                </>
            }
        </>

    );
}

export default Account;
