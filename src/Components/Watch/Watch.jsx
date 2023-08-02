import "./Watch.css"
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../Loader/Loader"
import { useParams } from 'react-router-dom'
import videosmpl from "../../assets/20210712-1_1080p - Trim.mp4"
import { getSingleVideo } from '../../actions/videoAction'
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
                <div className="watch">
                    <div>
                        <video src={videoUrl} className="video" controls ></video>
                    </div>
                    <div className="video-info">
                        <h2>
                            {/* {user.name} */}
                            {video.title}
                        </h2>
                    </div>
                </div>
            }
        </>
    )
}
