import { Heading, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allregister } from '../Redux/auth/action';
import TableRow from './TableRow';

const TableCard = () => {
    const alluser = useSelector((state) => state.auth.allregister);
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(allregister());
      }, []);
  return (
    <TableContainer w={"60%"} m={"auto"} mt={"5%"}>
        <Heading as='h4' size='md' w={"100%"} m={"auto"}>All Register User</Heading>
    <Table variant='striped' colorScheme='teal'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th >Phone</Th>
          <Th >Role</Th>
        </Tr>
      </Thead>
      <Tbody>
        {alluser.length>0 && alluser.map((e)=>(
        <TableRow key={e._id} data={e}/>
            ))}
        
      </Tbody>
      <Tfoot>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th>Total user:{alluser.length}</Th>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
  )
}

export default TableCard