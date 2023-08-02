import { Link, useNavigate } from "react-router-dom"
import "./Admin.css"
import React, { useState } from 'react'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { adminAllVideos } from "../../actions/videoAction"
import Loader from "../Loader/Loader"
import VideoCardList from "../VideoCardList/VideoCardList"
import { toast } from "react-toastify"
import { getUsers } from "../../actions/userAction"








export default function AdminPage() {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [keyward, setKeyward] = useState()

    const { userCount } = useSelector((state) => state.users)
    const { user } = useSelector((state) => state.user)
    const { videosCount, videos, loading } = useSelector((state) => state.adminVideos)



    useEffect(() => {
        dispatch(getUsers())
        dispatch(adminAllVideos(keyward))
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
    }, [user, navigate, dispatch, keyward])



    return (
        < >
            <div className="admin">
                <div className="admin-container">
                    <div >
                        <Link to={"/upload"}>
                            <button className="admin-btn">Upload Video</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/users"}>
                            <button className="admin-btn">View all USERS</button>
                        </Link>
                    </div>
                </div>
                <div className="admin-information">
                    <div className="admin-info">
                        <div className="admincircle">
                            <>
                                <div className="circle">
                                    <h3>
                                        {loading ?
                                            <></> :
                                            <p>

                                                {videosCount} 
                                            </p>
                                        }
                                         Video Uploades Till Now
                                    </h3>
                                </div>
                                <div className="circle">
                                    <h3>
                                        {loading ?
                                            <></> :
                                            <p>
                                                {userCount} 
                                            </p>
                                        } 
                                        Users registered Till Now
                                    </h3>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
                <div className="serach">
                    <div>
                        <input type="text" className="inp" placeholder="Search here..." value={keyward} onChange={(e) => setKeyward(e.target.value)} />
                    </div>
                </div>
                {loading ? <Loader /> :

                    <div className="admin-videoinfo-list">
                        <div className="admin-videocard-container">
                            {videos.length > 0 ? videos.map((item, i) => {
                                return (
                                    <>
                                        <VideoCardList item={item} i={i} />
                                    </>
                                )
                            }) :
                                <>
                                    Not found
                                </>
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
