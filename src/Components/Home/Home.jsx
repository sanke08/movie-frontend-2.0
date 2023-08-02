import "./Home.css"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CardContainer from "../CardContainer/CardContainer"
import { getAllVideos } from "../../actions/videoAction"

export default function Home() {




  const { videos, loading, videosCount, resultPerPage } = useSelector((state) => state.videos)








  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllVideos("", 1))
  }, [dispatch])


  return (
    <>

      <div className="home">
        <div className="home-container">

          <CardContainer />

        </div>

      </div>
    </>
  )
}
