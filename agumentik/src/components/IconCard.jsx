import React, { useState } from "react";
import { CardBody, Image, Card, Button, Box, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { iconupdateData } from "../Redux/app/action";

const IconCard = ({ data }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const user=useSelector((state)=>state.auth.user.role)
  console.log("user",user);
  //console.log("d",data);
  const handleedit = (id) => {
    //alert(id)
    setShow(true);
  };
  const handleupdated = (id) => {
    //alert(id)
    let payload = {
      ...data,
      linkUrl: value,
    };
    dispatch(iconupdateData(payload));
    setShow(false);
  };
  return (
    <Card  maxW="10%" maxH={"150px"}>
      <CardBody  >
        <Link to={data.linkUrl}>
          <Image
            // h={"100%"}
           
            src={data.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Link>
        {user=="admin" ? <Button onClick={() => handleedit(data._id)}>Edit</Button>:""}
        {show ? (
          <Box>
            <Input
              type="text"
              placeholder="Edit"
              // value={data.image}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={() => handleupdated(data._id)}>Add</Button>
          </Box>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
};

export default IconCard;
