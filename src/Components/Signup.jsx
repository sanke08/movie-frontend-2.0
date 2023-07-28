import { Box, Button, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register } from '../actions/authAction'
import Loader from "./Loader"
import { toast } from "react-toastify"
import { CLEAR_ERROR } from '../constance/constance'
// import { BiUserCircle } from "react-icons/bi"
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from '../firebase'


export default function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, user, error } = useSelector((state) => state.user)


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [avatar, setAvatar] = useState()
    // const [avatarPre, setAvatarPre] = useState()
    // const [avatarPer, setAvatarPer] = useState()
    // const [avatarUrl, setAvatarUrl] = useState()


    const handelsubmit = async (e) => {
        e.preventDefault()
        dispatch(register(name, email, password))
    }

    // const handleAvatar = (e) => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(e.target.files[0])
    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             setAvatarPre(reader.result)
    //             setAvatar(reader.result)
    //         }
    //     }
    // }



    // const handleUpload = async (file) => {

    //     const storage = getStorage(app);

    //     const storageRef = await ref(storage, `avatars/${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}` + file.name);
    //     const uploadTask = uploadBytesResumable(storageRef, file);

    //     // Listen for state changes, errors, and completion of the upload.
    //     uploadTask.on('state_changed',
    //         (snapshot) => {
    //             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             setAvatarPer(progress)
    //             switch (snapshot.state) {
    //                 case 'paused':
    //                     toast("Upload Is paused")
    //                     break;
    //                 case 'running':
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         },
    //         (error) => {
    //             console.log(error)
    //             toast(error)
    //         },
    //         async () => {
    //             // Upload completed successfully, now we can get the download URL
    //             await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                 setAvatarUrl(downloadURL)
    //             })
    //         },
    //     );
    // }


    // useEffect(() => {
    //     avatar && handleUpload(avatar)
    // }, [avatar])

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
    })

    // useEffect(() => {
    //     avatarUrl && toast("Now You can Upload")
    //     setTimeout(() => {
            
    //     }, 2000);
    // }, [avatarUrl])



    return (
        <>
            {loading ? <Loader /> :
                <Box w={"86vw"} h={["70vh", "80vh"]} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
                    <Box borderColor={"ActiveBorder"} border={"1px"} p={"2rem"} w={"16rem"}>
                        <VStack>
                            <Text marginBottom={"1rem"}>Signup</Text>
                            <Input placeholder='username' type='text' name='name' onChange={(e) => setName(e.target.value)} />
                            <Input placeholder='email' type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                            <Input placeholder='password' type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                            {/* <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
                                {avatarPre ?
                                    <Image src={avatarPre} objectFit={"cover"} w={"4rem"} h={"4rem"} borderRadius={"50%"} />
                                    : <BiUserCircle size={"3rem"} />
                                }
                                {
                                    avatarPer > 0 ? <>
                                        {avatarPer === 100 ? <>Uploaded</> :
                                            <>
                                                Uploading {avatarPer}%
                                            </>
                                        }
                                    </> :
                                        <Input type='file' accept='image/*' onChange={handleAvatar} />
                                }
                            </Box> */}
                            <Button onClick={handelsubmit} >Sign up</Button>
                        </VStack>

                    </Box>
                    <Box marginRight={"10rem"} marginTop={"1rem"}>
                        <Text fontSize={"0.7rem"}>Already Have Account?</Text>
                        <Link to={"/signin"}>
                            <Button size={"sm"} variant={"link"}>Signin</Button>
                        </Link>
                    </Box>
                </Box>
            }
        </>
    )
}
