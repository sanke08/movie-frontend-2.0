import "./VideoCardList..css"
import React from 'react'
import { Delete } from "@mui/icons-material"
import img from "../../assets/5337991.jpg"
import axios from "axios"
import { useDispatch } from "react-redux"
import { adminAllVideos } from "../../actions/videoAction"
import { toast } from "react-toastify"
import { useState } from "react"
import Loader from "../Loader/Loader"












export default function VideoCardList({ item, i }) {

    const dispatch = useDispatch()
    // const [loading, setLoading] = useState(true)

    const handleDelete = async (id) => {
        let videoName = prompt("Want to delete Enter Correct Movie Name :")
        console.log(videoName)
        const { data } = await axios.get(`https://movie-api-plum.vercel.app/api/video/getVideo/${id}`)
        const conformVideoName = data.video.title
        if (!videoName || videoName!==conformVideoName){
            toast.error("Video Name Not Match", {
                position: "top-center",
                theme: "dark",
                delay: 3000,
                draggable: true
            })
        } else {
            await axios.delete(`https://movie-api-plum.vercel.app/api/video/deleteVideo/${id}`)
            dispatch(adminAllVideos())
        }

    }







    return (
        <>

            <div className="videocardlist">
                <div className="videocardlist-left">
                    <p>
                        {i + 1}
                    </p>
                    <img src={img} className="img" alt="" />
                </div>
                <div className="videocardlist-middle">
                    <h3>
                        {item.title}
                    </h3>
                    <p>
                        {item.year}
                    </p>
                </div>
                <div className="videocardlist-right">
                    <button className="cardlist-btn" onClick={() => handleDelete(item._id)}><Delete /> </button>
                </div>
            </div>
        </>
    )
}
