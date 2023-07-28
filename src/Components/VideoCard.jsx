import React from 'react'
import { Box, Image, Text, } from '@chakra-ui/react'
// import img from "../assets/home.jpg"
import { Link } from 'react-router-dom'

export default function VideoCard({ item }) {
  return (
    <Link to={`/watch/${item._id}`} >
      <Box w={["18rem", "18rem"]} h={["15rem", "15rem"]} boxShadow={"xl"} cursor={"pointer"} marginTop={["0rem", "2rem"]} >
        <Box h={"11rem"} w={"18rem"} bgColor={"gray"} borderBottom={"2px"}>
          <Image src={item.thumbnailUrl} w={"19rem"}  h={"10.95rem"} objectFit={"fill"} />
          {/* <Image src={img} w={"19rem"} objectFit={"contain"} /> */}
        </Box>
        <Box padding={"0vw 0.5vw"} marginTop={"1rem"}>
          <Box>
            <Text >{item.title}</Text>
          </Box>
          <Box display={"flex"} gap={"1vw"} opacity={"0.5"} fontSize={["2vw", "0.7vw"]} >
            <Text>2022</Text>
            <Text>{item.category && (item.category).map((item) => {
              return (<>
                <>{item} </>
              </>)
            })}</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
