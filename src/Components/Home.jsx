import { Box, Button, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVideos } from '../actions/videoAction'
import Loader from "./Loader"

export default function Home() {




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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllVideos("", currPage))
  }, [dispatch, currPage])


  return (
    <>
      {loading ? <Loader /> :
        <Box w={["82vw","85vw"]} bgColor={"red"}>

          <Box w={"100%"} padding={["0.5rem", "1rem"]} marginTop={"1rem"} display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={["1rem", "0rem"]}  >

            {videos && videos.length >= 1 ?

              videos.map((item) => {
                return (
                  <>
                    <VideoCard item={item} key={item._id} />
                  </>
                )
              })
              :
              <>
                <Box w={"100%"} h={"50vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                  <Text>Not Found </Text>
                </Box>
              </>
            }

          </Box>
          <Box display={"flex"} justifyContent={"center"} w={"100%"} gap={"1rem"} alignItems={"center"}>
            <Button onClick={first}>First</Button>
            <Button onClick={pre}>pre</Button>
            <Text > {currPage} </Text>
            <Button onClick={next}>next</Button>
          </Box>
        </Box>
      }
    </>
  )
}
