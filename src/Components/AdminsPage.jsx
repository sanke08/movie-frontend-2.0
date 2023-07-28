import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import Loader from "./Loader"
import { useNavigate } from 'react-router-dom'
import { MultipleStopOutlined } from "@mui/icons-material"
import axios from 'axios'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
import { toast } from "react-toastify"




 
export default function AdminsPage() {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user)

    const [display, setDisplay] = useState("none")

    const [category, setCategory] = useState("")
    const [timing, setTiming] = useState()
    const [year, setYear] = useState()

    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")

    const [thumbnailPer, setThumbnailPer] = useState(0)
    const [videoPer, setVideoPer] = useState(0)


    const [video, setVideo] = useState()
    const [videoUrl, setVideoUrl] = useState()

    const [thumbnail, setThumbnail] = useState()
    const [thumbnailUrl, setThumbnailUrl] = useState("")


    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(true)


    const setdisplayHandle = () => {
        display === "none" ? setDisplay("flex") : setDisplay("none")
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }



    const handleUpload = async (file, urlType) => {

        const storage = getStorage(app);

        const storageRef = await ref(storage, `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}` + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "thumbnailUrl" ? setThumbnailPer(progress) : setVideoPer(progress);
                switch (snapshot.state) {
                    case 'paused':
                        toast("Upload Is paused")
                        break;
                    case 'running':
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error)
                toast(error)
            },
            async () => {
                // Upload completed successfully, now we can get the download URL
                await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    if (urlType === "videoUrl") {
                        setVideoUrl(downloadURL)
                        // console.log(downloadURL)
                    }
                    if (urlType === "thumbnailUrl") {
                        // console.log(downloadURL)
                        setThumbnailUrl(downloadURL)
                    }
                })
            },
        );
    }
    // 
   
    const upload = async () => {
        const config = { headers: { "Content-Type": "application/json" } }
        const {data}=await axios.post("/video/create", { title, thumbnailUrl: "test", videoUrl: "test", discription, category: category.split(",") }, config)
        console.log("uploaded")
        toast("Upload SuccessFull", {
            theme: "dark",
            position: "top-center",
            autoClose: 5000,
            draggable: true,
            closeOnClick: true
        })
        console.log(data)
        navigate(`/watch/${data.newVideo._id}`)
    }

    useEffect(() => {
        videoUrl && thumbnailUrl && toast("Yuo Can Upload now", {
            theme: "dark",
            position: "top-center",
            autoClose: 5000,
            draggable: true,
            closeOnClick: true
        }) &&
            setTimeout(() => {
                setDisabled(false)
            }, 2000);

    }, [thumbnailUrl, videoUrl])

    useEffect(() => {
        video && handleUpload(video, "videoUrl")
    }, [video])


    useEffect(() => {
        thumbnail && handleUpload(thumbnail, "thumbnailUrl")
    }, [thumbnail])

    useEffect(() => {
        if (!user) {
            toast.error("Please Login First", {
                theme: "dark",
                position: "top-center",
                autoClose: 2000,
                draggable: true,
                closeOnClick: true
            })
            return navigate("/signin")
        }

        if (user.isAdmin !== "admin") {
            toast.error("User Not Allowed to Access this page", {
                theme: "dark",
                position: "top-center",
                autoClose: 2000,
                draggable: true,
                closeOnClick: true
            })
            navigate("/")
        }
        setLoading(false)
    }, [user, navigate])

    return (
        <>
            {
                loading ? <Loader /> :
                    <>
                        <Box>
                            <Box marginRight={"100%"} padding={"1rem"}> <Button onClick={setdisplayHandle}> Upload Video </Button> </Box>
                        </Box>
                        <Box position={"absolute"} h={["100%", "91vh"]} w={"86vw"} top={["3rem", "4rem"]} bgColor={"black"} display={display} opacity={0.7} >
                            <Box h={"90vh"} w={"86vw"} display={display} justifyContent={"center"} alignItems={"center"} >
                                <Box w={["20rem", "30rem"]} h={"fit-content"} display={"flex"} flexDir={"column"} justifyContent={"center"} gap={"1rem"} border={"1px"} borderColor={"ActiveBorder"} p={"2rem"} bgColor={"gray.800"} position={"relative"}>
                                    <Button w={"fit-content"} position={"absolute"} top={0} right={0} onClick={setdisplayHandle}>
                                        <MultipleStopOutlined />
                                    </Button>
                                    <Box marginBottom={"2rem"}>
                                        <Text fontWeight={"bold"} fontSize={"x-large"} >
                                            Upload A Video :
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Input type='text' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                    </Box>
                                    <Box>
                                        <Input type="text" placeholder='Discription' value={discription} onChange={(e) => { setDiscription(e.target.value) }} />
                                    </Box>
                                    <Box>
                                        <Input type="text" placeholder='Category' value={category} onChange={handleCategory} />
                                    </Box>
                                    <Box>
                                        <Input type="text" placeholder='Timing' value={timing} onChange={(e) => setTiming(e.target.value)} />
                                    </Box>
                                    <Box>
                                        <Input type="text" placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)} />
                                    </Box>
                                    <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
                                        {thumbnailPer > 0 ?
                                            <>
                                                {thumbnailPer === 100 ? <>Uploaded</> :
                                                    <>
                                                        uploading.. {Math.round(thumbnailPer)}%

                                                    </>}
                                            </> :
                                            <>
                                                Thumbnail  : <Input type='file' accept='image/*' w={"20rem"} onChange={(e) => setThumbnail(e.target.files[0])} />
                                            </>
                                        }
                                    </Box>
                                    <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
                                        {videoPer > 0 ? <>
                                            {videoPer === 100 ? <>Uploaded</> :
                                                <>
                                                    uploading.. {Math.round(videoPer)}%

                                                </>}
                                        </> :
                                            <>
                                                Video :  <Input type='file' accept='video/*' w={"20rem"} onChange={(e) => setVideo(e.target.files[0])} />
                                            </>
                                        }
                                    </Box>
                                    <Box display={"flex"} justifyContent={"center"}><Button onClick={upload} isDisabled={disabled}> {videoUrl && thumbnailUrl ? <>Upload</> : <>Wait</>} </Button> </Box>
                                    {/* <Box display={"flex"} justifyContent={"center"}><Button onClick={upload} > {videoUrl && thumbnailUrl ? <>Upload</> : <>Wait</>} </Button> </Box> */}
                                </Box>
                            </Box>
                        </Box>
                    </>
            }
        </>
    )
}
