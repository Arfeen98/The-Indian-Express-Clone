import React from 'react';
// import { useDispatch } from 'react-redux';
import { useDisclosure } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormLabel,
    FormControl,
  } from '@chakra-ui/react'

export function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
      <>
        <Button style={{backgroundColor:'black',marginTop:'0.6rem'}} onClick={onOpen}><i className="fa-solid fa-magnifying-glass"></i></Button>
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen}
          onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={3}>
              <FormControl>
                <Input ref={initialRef} placeholder='Search Here' />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button style={{backgroundColor:'black',color:'white'}} mr={3}>
               Search
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }