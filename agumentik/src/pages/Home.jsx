import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal,
  Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData, geticonData } from "../Redux/app/action";
import SingleCard from "../components/SingleCard";
import IconCard from "../components/IconCard";
import { saveVisitor } from "../Redux/auth/action";
//import Modal from "../components/Modal";

const Home = () => {
  const image = useSelector((state) => state.app.imgData);
  const social = useSelector((state) => state.app.socialIcon);
  const dispatch = useDispatch();
  // for modal part
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    role:"user"
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleuser = () => {
    dispatch(saveVisitor(form))
    setTimeout(()=>{
      onClose()
    },2000)
  };

  useEffect(() => {
    dispatch(getData());
    dispatch(geticonData());
  }, []);
  return (
    <Box >
      <Grid gridTemplateColumns={"repeat(4,1fr)"} onClick={onOpen}>
        {image.map((e) => (
          <SingleCard key={e._id} data={e}  />
        ))}
      </Grid>
      <Heading as='h4' size='md' w={"100%"} m={"auto"}>Social Icon</Heading>
      <Flex justifyContent={"center"} alignItems={"center"}>
        {social.map((e) => {
          return <IconCard key={e._id} data={e} />;
        })}
      </Flex>

      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="First name"
                name="name"
                value={form.name}
                onChange={handlechange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone No</FormLabel>
              <Input
              type="number"
                placeholder="Phone No"
                name="phone"
                value={form.phone}
                onChange={handlechange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleuser}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
