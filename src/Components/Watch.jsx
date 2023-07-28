import { Box,  Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Loader from "./Loader"
import { useParams } from 'react-router-dom'
// import videosmpl from "../assets/video.mp4"
import { getSingleVideo } from '../actions/videoAction'
import { toast } from "react-toastify"





export default function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { video, loading } = useSelector((state) => state.video)
    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        if (!user) {
            toast.error("Login First", {
                theme: "dark",
                position: "top-center",
                autoClose: 2000,
                draggable: true,
                closeOnClick: true
              })
            navigate("/signin")
        }
        dispatch(getSingleVideo(id))
    }, [dispatch, id, navigate, user])


    return (
        <>
            {loading ? <Loader /> :
                <Box w={["100%", "86vw"]} display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"1rem"}>
                    <Box w={"100%"} >
                        <Box w={"100%"}>
                            <video src={video.videoUrl} controls />
                        </Box>
                        <Box ml={"2rem"}>
                            <Text fontSize={"2rem"}>
                                {video.title}
                            </Text>
                            <p>{video.discription} </p>
                        </Box>
                    </Box>
                </Box>
            }
        </>
    )
}
