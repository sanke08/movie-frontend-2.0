import { useDispatch, useSelector } from "react-redux"
import "./Users.css"
import React from 'react'
import { useEffect } from "react"
import { getUsers } from "../../actions/userAction"
import UserCard from "../UserCard/UserCard"
import Loader from "../Loader/Loader"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"











export default function Users() {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user)
    const { users, loading } = useSelector((state) => state.users)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers())
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
    }, [dispatch,navigate,user])


    return (
        <>
            {
                loading ? <Loader />
                    :
                    <div className="users">
                        <div className="user-container">
                            {users ? users.map((item, i) => {
                                return (
                                    <>
                                    <UserCard item={item} key={i} index={i}/>
                                    </>
                                )
                            }) :
                                <>Not Found</>
                            }
                        </div>
                    </div>
            }
        </>
    )
}
