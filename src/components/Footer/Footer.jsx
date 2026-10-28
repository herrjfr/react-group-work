import React from 'react'
import "./Footer.css"
import FootLogo from "../../assets/foot-logo.png"
import Foot1 from "../../assets/f1.png"
import Foot2 from "../../assets/f2.png"
import Foot3 from "../../assets/f3.png"
import Foot4 from "../../assets/f4.png"

function Footer() {
  return (
    <footer className='w-[100%] bg-[#474747]'>
      <div className='w-[100%] flex justify-between'>
        <div className='flex flex-col gap-[25px] w-[18vw]'>
          <div className='flex gap-[16px]'>
            <img src={FootLogo} alt="" />
            <i className='logo-text text-white text-[36px]'>Bistro Bliss</i>
          </div>
          <p className='aa text-[15px] text-[#ADB29E] font-light'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
          <div className="logos flex gap-[10px]">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <ul className='text-[#DBDFD0] flex flex-col gap-[20px]'>
          <li className='text-white ul-top'>Pages</li>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Pricing</li>
          <li>Bold</li>
          <li>Contact</li>
          <li>Delivery</li>
        </ul>
        <ul className='text-[#DBDFD0] flex flex-col gap-[20px]'>
          <li className='text-white ul-top'>Utility Pages</li>
          <li>Start Here</li>
          <li>Styleguide</li>
          <li>Password Protected</li>
          <li>404 not found</li>
          <li>Licenses</li>
          <li>Changelog</li>
          <li>View more</li>
        </ul>
        <div className='flex flex-col gap-[35px]'>
          <p className='text-white cursor-pointer font-semibold'>Follow Us On Instagram</p>
          <div className='w-[380px] h-[340px] flex flex-wrap gap-[20px]'>
            <img className='w-[180px] h-[160px] cursor-pointer hover:scale-[1.02] transition-[.3s]' src={Foot1}/>
            <img className='w-[180px] h-[160px] cursor-pointer hover:scale-[1.02] transition-[.3s]' src={Foot2}/>
            <img className='w-[180px] h-[160px] cursor-pointer hover:scale-[1.02] transition-[.3s]' src={Foot3}/>
            <img className='w-[180px] h-[160px] cursor-pointer hover:scale-[1.02] transition-[.3s]' src={Foot4}/>
          </div>
        </div>
      </div>
      <div className='line'></div>
      <p className='text-center text-[#ADB29E]'>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
    </footer>
  )
}

export default Footer