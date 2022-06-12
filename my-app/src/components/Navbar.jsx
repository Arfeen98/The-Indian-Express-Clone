// import { Box } from '@chakra-ui/react'
import React from 'react'
import styled from './Navbar.module.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // RepeatIcon,
  // ExternalLinkIcon,
  // AddIcon,
  // HamburgerIcon,
  // IconButton,
  // EditIcon
} from '@chakra-ui/react'

const Navbar = () => {
  const current=new Date();
  const date = `${current.getDate()}/${current.getUTCMonth()+1}/${current.getFullYear()}`;
  return (
    <>
       <div className={styled.lang}>
          <div>
              <h2>ENGLISH</h2>
              <h2>தமிழ்</h2>
              <h2>বাংলা </h2>
              <h2>മലയാളം</h2>
              <h2>हिंदी</h2>
              <h2>मराठी</h2>
          </div>
       </div>
    <div className={styled.container}>
     <div className={styled.logos}>
      <h5>Follow Us:</h5>
      <i style={{marginLeft:'7px'}} className="fa-brands fa-facebook fa-2x"></i>
      <i style={{marginLeft:'7px'}} className="fa-brands fa-twitter-square fa-2x"></i>
     </div>
     <div className={styled.image}>
      <img className={styled.navimage} src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" width='400px' height='40px' alt="" />
     <div>{date}</div>
     </div>
     <div className={styled.add}>
       <h3>Ads by Google</h3>
     </div>
     </div>
     <div className={styled.blnav}>
     {/* <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu> */}
     </div>
     </>
  )
}

export default Navbar
