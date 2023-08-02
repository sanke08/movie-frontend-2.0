import { Link, useNavigate } from "react-router-dom"
import "./Upload.css"
import React from 'react'
import { useSelector } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useEffect } from "react"











export default function Upload() {


    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user)


    const [category, setCategory] = useState("")
    const [timing, setTiming] = useState()
    const [year, setYear] = useState()

    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")

    // const [thumbnailPer, setThumbnailPer] = useState(0)
    // const [videoPer, setVideoPer] = useState(0)


    const [video, setVideo] = useState()
    // const [videoUrl, setVideoUrl] = useState()

    const [thumbnail, setThumbnail] = useState()
    // const [thumbnailUrl, setThumbnailUrl] = useState("")


    // const [disabled, setDisabled] = useState(true)
    // const [loading, setLoading] = useState(true)


    const upload = async () => {
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post("https://movie-api-plum.vercel.app/api/video/create", { title, thumbnailUrl: "test", videoUrl: "test", discription, category: category.split(",") }, config)
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
        // setLoading(false)
    }, [user, navigate])


    return (
        <>
        <div className="upload-main">
            <div>
                <Link to={"/users"}>
                <button className="upload-btn nav">Users</button>
                </Link>
            </div>
            <div className="upload">
                <div className="upload-container">
                    <div className="uploadtitle">
                        <h2>
                            Upload :
                        </h2>
                    </div>
                    <div className="upload-input">
                        <input type="text" className="upload-inp" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" className="upload-inp" placeholder="Discription" onChange={(e) => setDiscription(e.target.value)} />
                        <input type="text" className="upload-inp" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
                        <input type="text" className="upload-inp" placeholder="Time Limit" onChange={(e) => setTiming(e.target.value)} />
                        <input type="text" className="upload-inp" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                        <input type="file" className="upload-inp" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} />
                        <input type="file" className="upload-inp" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
                        <button className="upload-btn" onClick={upload}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
