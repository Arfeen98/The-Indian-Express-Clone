import React,{useState} from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import { Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,ModalCloseButton,
    Button,Input,FormControl,} from '@chakra-ui/react'
import Search from '../Edutac/Search';

export function InitialFocus() {
    const [search,setSearch]=useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null);
    const [handle,setHandle]=useState(false);
    const navigate=useNavigate();
  

      const handleClick=()=>{
      // dispatch(getSearch(search));
      setSearch(search);
      setHandle(true);
       navigate('/search')
    }
    const handleCha=()=>{
      navigate('/');
    }
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
                <Input ref={initialRef} onChange={(e)=>setSearch(e.target.value)} placeholder='Search Here' />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button style={{backgroundColor:'black',color:'white'}} mr={3} onClick={handleClick}>
               Search
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {handle?<div style={{marginTop:'55%',marginLeft:'-75%',width:'97%',overflow:'hidden',height:'2700px'}}>
          <Search search={search}/></div>
        :''}
      </>
    )
  }