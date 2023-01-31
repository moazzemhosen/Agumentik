import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Visitor = ({data}) => {
  return (
    <Flex border={"1px solid red"} w={"30%"} h={"50px"} justify={"space-around"} alignItems={"center"} fontWeight={"bold"}>
    <Text>{data.name}</Text>
    <Text>{data.phone}</Text>
    <Text>{data.role}</Text>
    <Box><CloseIcon/></Box>
    </Flex>
  )
}

export default Visitor