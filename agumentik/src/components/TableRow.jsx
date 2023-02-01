import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

const TableRow = ({data}) => {
  return (
    <Tr>
          <Td>{data.name}</Td>
          <Td>{data.email}</Td>
          <Td >{data.phone}</Td>
          <Td >{data.role}</Td>
        </Tr>
  )
}

export default TableRow