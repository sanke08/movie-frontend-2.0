import "./UsesrCard.css"
import React from 'react'
import img from "../../assets/5337991.jpg"
import { Delete } from "@mui/icons-material"
import axios from "axios"
import { useDispatch } from "react-redux"
import { getUsers } from "../../actions/userAction"
import { toast } from "react-toastify"




export default function UserCard({ item, index }) {


    const dispatch = useDispatch()

    

    const handleDelete = async (id) => {
        let userEmail = prompt("Want to delete Enter Correct Email  :")
        const { data } = await axios.get(`https://movie-api-plum.vercel.app/api/user/getUser/${id}`)
        const conformUserEmail = data.user.email
        if (!userEmail || userEmail !== conformUserEmail) {
            toast.error("User Email Not Match", {
                position: "top-center",
                theme: "dark",
                delay: 3000,
                draggable: true
            })
        } else {

            await axios.delete(`https://movie-api-plum.vercel.app/api/user/deleteUser/${id}`)
            dispatch(getUsers())
        }
    }

    return (
        <>
            <div className="usercard">
                <div>
                    <div className="usercard-img">
                        {index + 1}
                        <img src={img} className="img" alt="" />
                        {item.isAdmin}
                    </div>
                </div>
                <div className="usercard-info">
                    <h3>
                        {item.name}
                    </h3>
                    <p>
                        {item.email}
                    </p>
                </div>
                <button className="card-btn" onClick={() => handleDelete(item._id)}> <Delete /> </button>
            </div>
        </>
    )
}
