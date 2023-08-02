import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register } from '../../actions/authAction'
import Loader from "../Loader/Loader"
import { toast } from "react-toastify"
import { CLEAR_ERROR } from '../../constance/constance'
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
                <div className="signin" >
                    <div>
                        <div className="sign-container">
                            <h2>Sign up</h2>
                            <input className="auth-inp" type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} />
                            <input className="auth-inp" type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                            <input className="auth-inp" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                            <button className="auth-btn" onClick={handelsubmit}>Signin</button>
                        </div>
                        <div className="sign-nav">
                            <p>
                                Already have account
                            </p>
                            <Link to={"/signin"}>
                                <div className="link">
                                    Sign in
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}
