import "./Menu.css"
import React from 'react'
import { BiHome, BiWorld, BiSquareRounded, BiNavigation, BiCompass, BiUserCircle, BiUser } from "react-icons/bi"
import { Link, } from "react-router-dom"
import { useDispatch, useSelector, } from 'react-redux'
import { getAllVideos, getRandomVideos } from '../../actions/videoAction'
import { VIDEO_CLEAR } from '../../constance/constance'
import { Circle, CircleOutlined, CompassCalibrationOutlined, CompassCalibrationRounded, Face, Home, MailOutline, Man, NavigateBefore } from '@mui/icons-material'




export default function Menu() {
    const dispatch = useDispatch()


    const handleRandom = () => {
        dispatch({ type: VIDEO_CLEAR })
        dispatch(getRandomVideos())
    }
    const handleGetVideo = () => {
       
        dispatch(getAllVideos("", 1))
    }




    return (
        <>
            <div className="menu">
                
                <div className="menu-navigate">
                    <Link to={"/"} >
                        <button className="btn" onClick={handleGetVideo} > <Home size={"1.3vw"} /> Home</button>
                    </Link>
                    <Link to={"/"}>
                        <button className="btn" onClick={handleRandom}> <CircleOutlined /> Random</button>
                    </Link>
                    <Link to={"/fav"}>
                        <button className="btn"> <Face />Your Videos</button>
                    </Link>
                    <Link to={"/admin"}>
                        <button className="btn"> <Face />Admin</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
