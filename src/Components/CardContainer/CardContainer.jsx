import React from 'react'
import "./CardContainer.css"
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import Loader from '../Loader/Loader'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllVideos } from '../../actions/videoAction'








export default function CardContainer() {

  const dispatch = useDispatch()

  const { videos, loading, videosCount, resultPerPage } = useSelector((state) => state.videos)

  const [currPage, setCurrPage] = useState(1)

  const re = videosCount / resultPerPage

  const next = () => {
    currPage <= re && setCurrPage(currPage + 1)
  }
  const pre = () => {
    currPage > 1 && setCurrPage(currPage - 1)
  }
  const first = () => {
    setCurrPage(1)
  }



  useEffect(() => {
    dispatch(getAllVideos("", currPage))
  }, [dispatch, currPage])


  return (
    <>
      {loading ? <Loader /> :
        <div className="cardcontainer">
          <div>
            {videos && videos.length > 0 ? videos.map((item) => {
              return (<Card item={item} key={item._id} />)
            }) :
              <>
              <div className="notfound">

                Not found
              </div>
              </>
            }
          </div>
          <div className="pagination">
            <button className="pg-btn" onClick={first}>First</button>
            <button className="pg-btn" onClick={pre}>Pre</button>
            {currPage}
            <button className="pg-btn" onClick={next}>Next</button>
          </div>
        </div>
      }
    </>
  )
}
