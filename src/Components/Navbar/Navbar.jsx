import "./Navbar.css"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { useDispatch, } from 'react-redux'
import { getAllVideos } from '../../actions/videoAction'
import { Face2Outlined, FaceOutlined } from "@mui/icons-material"



export default function Navbar() {



    const [keyward, setKeyward] = useState("")


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllVideos(keyward))
    }, [dispatch, keyward])


    return (
        <>

            <div className="navbar">
                <h2>
                    M-Movie
                </h2>
                <div className="navbar-container">
                    <div>
                        <input className="inp" type="text" placeholder="Search here..." value={keyward} onChange={(e) => setKeyward(e.target.value)} />
                    </div>
                    <div className="navbar-svg">
                        <Link to={"/account"}>
                            <FaceOutlined />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
