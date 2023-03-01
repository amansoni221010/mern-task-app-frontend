
import './signuptippy.css'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StoreIcon from '@mui/icons-material/Store';
import NotificationsIcon from '@mui/icons-material/Notifications';
import coupon from '../header/coupon.png'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';




const SignupTippy = () => {
    const [open,setOpen]=useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout=()=>{
    

  }
    return (
        <div className='logintab' id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        >
            {/* <div className="log_in">
                <p className='nc'>New Customer?</p>
                <p className='su'>Sign Up</p>
                
            </div> */}
            <div className="log_in">
                <AccountCircleIcon/>
                <p>My Profile</p>
            </div>
            <div className="log_in">
                <FavoriteBorderIcon/>
                <p>SuperCoin Zone</p>
    
            </div>
            <div className="log_in">
            <img 
                width="20px"
                  src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
    
                <p>Flipkart Plus Zone</p>
    
            </div>
            <div className="log_in">
                <StoreIcon/>
                <p>Orders</p>
    
            </div>
            <div className="log_in">
                <FavoriteBorderIcon/>
                <p>Wishlist</p>
    
            </div>
            <div className="log_in">
            <img 
                width="20px"
                  src={coupon}
                  alt=""
                />
                {/*  */}
                <p>Coupons</p>
    
            </div>
            <div className="log_in">
                <CardGiftcardIcon/>
                <p>Gift Cards</p>
    
            </div>
            <div className="log_in">
                <NotificationsIcon/>
                <p>Notifications</p>
    
            </div>
            <div className="log_in" onClick={()=>{handleClose(); logout();}}>
            <PowerSettingsNewIcon/>
                <p>Logout</p>
    
            </div>
    
          
        </div>
      )
}

export default SignupTippy

