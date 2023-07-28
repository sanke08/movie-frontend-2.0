import { Box, Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiHome, BiWorld, BiSquareRounded } from "react-icons/bi"
import { Link, } from "react-router-dom"
import { useDispatch, useSelector, } from 'react-redux'
import { getAllVideos, getRandomVideos } from '../actions/videoAction'
import { VIDEO_CLEAR } from '../constance/constance'
import {  MailOutline } from '@mui/icons-material'




export default function Menu() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)


    const handleRandom = () => {
        dispatch({ type: VIDEO_CLEAR })
        dispatch(getRandomVideos())
    }
    const handleGetVideo = () => {
        dispatch(getAllVideos("", 1))
    }




    return (
        <>
            <Box w={["20%", "15%"]} h={["106vh","99vh"]} bgcolor={"red"} position={"sticky"} top={"0"} borderRight={"1px"} borderColor={"ActiveBorder"}  >
                <Box p={"0 2vw"}>
                    <Box w={"full"}>
                        
                        <VStack marginTop={"2vh"} display={"flex"} justifyContent={"flex-start"} >
                            <Box w={"full"} >
                                <Link to={"/"} > <Button w={"full"} display={"flex"} gap={"1vw"} variant={"ghost"} justifyContent={"flex-start"} onClick={handleGetVideo}> <BiHome /> <Box fontSize={["0rem", "100%"]} >Home</Box> </Button></Link>
                            </Box>
                            <Box w={"full"} >
                                <Link to={"/"} > <Button w={"full"} display={"flex"} gap={"1vw"} variant={"ghost"} justifyContent={"flex-start"} onClick={handleRandom}> <BiWorld /> <Box fontSize={["0rem", "100%"]} >Random</Box> </Button></Link>
                            </Box>
                            {
                                user&&user.isAdmin==="admin" &&
                                <Box w={"full"} >
                                    <Link to={"/admin"} > <Button w={"full"} display={"flex"} gap={"1vw"} variant={"ghost"} justifyContent={"flex-start"}> <BiSquareRounded />  <Box fontSize={["0rem", "100%"]}>Admin</Box> </Button></Link>
                                </Box>
                            }
                            <Box w={"full"} >
                                <Link to={"/contact"} > <Button w={"full"} display={"flex"} gap={"1vw"} variant={"ghost"} justifyContent={"flex-start"}> <MailOutline fontSize='' /> <Box fontSize={["0rem", "100%"]}>Contact Us</Box> </Button></Link>
                            </Box>
                            <Box display={"flex"} w={"full"}>
                                {/* <ColorModeSwitcher /> */}
                            </Box>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
