import React, { useEffect } from "react";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData, geticonData } from "../Redux/app/action";
import SingleCard from "../components/SingleCard";
import IconCard from "../components/IconCard";
import { getVisitor } from "../Redux/auth/action";
import Visitor from "../components/Visitor";
import { AddIcon } from "@chakra-ui/icons";
import TableCard from "../components/TableCard";

const Admin = () => {
  const image = useSelector((state) => state.app.imgData);
  const social = useSelector((state) => state.app.socialIcon);
  const visitor = useSelector((state) => state.auth.visitor);
  
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    dispatch(geticonData());
    dispatch(getVisitor());
  }, []);
  return (
    <Box>

      {/* //for random visitor data collection */}
      <Flex direction={"column"} w={"60%"} m={"auto"} border={"2px solid gray"}>
        <Heading as='h4' size='md'>Visitor</Heading>
        {visitor.map((e) => (
          <Visitor key={e._id} data={e} />
        ))}
      </Flex>
      {/* //register user Details */}

        <TableCard/>


      {/* //all image shown here */}
      <Grid gridTemplateColumns={"repeat(4,1fr)"}>
        {image.map((e) => (
          <SingleCard key={e._id} data={e} />
        ))}
      </Grid>

      {/* //icon url link is here */}
      <Flex justifyContent={"center"} alignItems={"center"}>
        {social.map((e) => {
          return <IconCard key={e._id} data={e} />;
        })}
        <Box m={"20px"} p={"10px"} bgColor={"gray"} borderRadius={"50px"}><AddIcon/></Box>
      </Flex>

    </Box>
  );
};

export default Admin;
