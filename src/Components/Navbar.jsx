import { Box, Button, HStack, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import { useDispatch,  } from 'react-redux'
import { getAllVideos } from '../actions/videoAction'



export default function Navbar() {



    const [keyward, setKeyward] = useState()


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllVideos(keyward))
    }, [dispatch,keyward])


    return (
        <>
            <Box w={["100%"]} h={["3rem", "4rem"]} top={"0"} boxShadow={"lg"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} position={"sticky"} zIndex={"9"} bgColor={"Background"}>
                <Box w={"100%"}>
                    <HStack justifyContent={"space-between"} padding={["0rem 1rem", "0rem 2rem"]}>
                    <Text fontSize={["4vw", "2vw"]} overflow={"visible"} shadow={"lg"} cursor={"pointer"} paddingLeft={["0", "1vw"]} h={["3rem", "4rem"]} display={"flex"} alignItems={"center"}>M app</Text>
                        <Input w={"40vw"} placeholder={"search"} value={keyward} onChange={(e) => { setKeyward(e.target.value) }} />
                        <Link to={"/account"}>
                            <Button><BiUser /> </Button>
                        </Link>
                    </HStack>
                </Box>

            </Box>
        </>
    )
}
