import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Visitor = ({data}) => {
  return (
    <Flex border={"1px solid gray"} w={"full"} h={"50px"} justify={"space-between"} alignItems={"center"} fontWeight={"bold"} p={"2%"}>
    <Text>{data.name}</Text>
    <Text>{data.phone}</Text>
    <Text>{data.role}</Text>
    <Box><CloseIcon/></Box>
    </Flex>
  )
}

export default Visitor