import { Box } from "@mui/system";
import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import Login from "../Login";

import { styled, Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SignupTippy from "./SignupTippy";
import { PowerSettingsNew } from '@mui/icons-material';


const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
    color: grey;
`;
const Profile = ({ account , setAccount }) => {
  const [open, setOpen] = useState(false);
  
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    
  }
  const logout = () => {
    setAccount('');
  };
  return (
    <>
      <Box  onClick={handleClick}>
      

      <Typography style={{marginTop: '25px', 
    color:"white"}} 
     >{account}</Typography>
      </Box>
      <div className="menu" 
      id="basic-menu"
      anchorEl={open}
      open={Boolean(open)}
      onClose={handleClose}
      >
      <div className="horizontal-space " style={{display: 'flex', backgroundColor: 'rgb(245,243,243)',
      borderRadius: '4px',
      padding: '5px', marginTop: '5px'}}
      onClick={() => { handleClose(); logout();}}>
        <PowerSettingsNew fontSize='small' color='primary'/> 
        <Logout>Logout</Logout>
      </div>
      </div>
      
    </>
  );
};

export default Profile;
{/* <Tippy
          content={<SignupTippy></SignupTippy>}
          //  visible={false}
          // visible={true}
          theme="light"
          interactive={true}
          offset={[5, 13]}
        >
    <Button style={{marginTop: 2,
    color:"white"}} id="demo-positioned-button"
    aria-controls={open ? 'demo-positioned-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
     onClick={handleClick}>{account}</Button>
     </Tippy> */}