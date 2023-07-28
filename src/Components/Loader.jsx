import {Spinner,Box } from '@chakra-ui/react'
import React from 'react'




export default function Signup() {
    return (
        <>
        
        <Box w={"100%"} h={["70vh", "70vh"]} display={"flex"} alignItems={"center"} justifyContent={"center"} >
            <Spinner size={"xl"} speed='1s' />
        
      </Box>
        </>
    )
}
