import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      
      <a href='https://www.facebook.com/100083496823250/videos/907978073650590' target='_blank' rel='noreferrer'><div><FaYoutube /></div></a>
        
      <a href='https://www.facebook.com/profile.php?id=100041521071834' target='_blank' rel='noreferrer'><div><FaFacebookF/></div></a> 
       
      <a href='https://www.instagram.com/autofibravaldivia/'  target='_blank' rel='noreferrer'><div><BsInstagram/></div></a>
      
    </div>
  )
}

export default SocialMedia