import { CardBody, Image,Card, Button, Input, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../Redux/app/action';

const SingleCard = ({data}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const use=useSelector((state)=>state.auth.user)
  //console.log("user",use);

  const handleedit=(id)=>{
   //alert(id)
   setShow(true)
  }
  const handleupdated=(id)=>{
    //alert(id)
    let payload={
      ...data,
      image:value
    }
    dispatch(updateData(payload))
    setShow(false)
   }
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={data.image}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
   
      {use.role =="admin" ? <Button onClick={()=>handleedit(data._id)}>Edit</Button>:""}
      {show ? (
        <Box>
          <Input
            type="text"
            placeholder="Edit"
           // value={data.image}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={()=>handleupdated(data._id)}>Add</Button>
        </Box>
      ) : (
        ""
      )}
    </CardBody>
   
  </Card>
  )
}

export default SingleCard