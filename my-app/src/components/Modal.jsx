import React,{useState} from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch,useSelector } from 'react-redux';
import { getSearch } from '../Redux/NewsReducer/action';
import {useNavigate} from 'react-router-dom';
import { Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,ModalCloseButton,
    Button,Input,FormControl,} from '@chakra-ui/react'
import Search from './Search';

export function InitialFocus() {
    const [search,setSearch]=useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const data=useSelector((state)=>state.news.data9.articles);

      const handleClick=()=>{
      dispatch(getSearch(search));
      //  navigate('/search')
      // console.log(data);
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
        {data?.map((item)=>(
          <Search key={item.id} {...item}/>
        ))}
      </>
    )
  }