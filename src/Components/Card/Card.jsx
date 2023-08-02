import React from 'react'
import img from "../../assets/5337991.jpg"
import "./Card.css"
import { Link } from 'react-router-dom'








export default function Card({ item }) {






    return (
        <>
            <Link to={`/watch/${item._id}`}>
                <div className="card">
                    <div className="card-container">
                        <img src={img} className='card-img' alt="" />
                    </div>
                    <div className="blur">

                    </div>
                    <div className="card-info">
                        <h2>
                            {item.title}
                        </h2>
                        <p>
                            <p>
                                {item.year}
                            </p>
                            <p>

                                {item.category && (item.category).map((item) => {
                                    return (<>{item} </>)
                                })}
                            </p>
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}
