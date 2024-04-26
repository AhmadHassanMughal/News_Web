import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'

const Footer = ({category, setCategory}) => {

  const navigate = useNavigate();

  return (
    <footer className="bg-red-900 text-white pt-14 pb-3 px-[10%]">
      <div className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-[900] uppercase text-large cursor-pointer">
              Contact Information
            </div>
            <div className="font-oswald font-medium uppercase text-[0.8rem] cursor-pointer">
              Ph.No: 111-222-333
            </div>
            <div className="font-oswald font-medium uppercase text-[0.8rem] cursor-pointer">
              Email: info@gmail.com
            </div>

          </div>

          <div className="flex flex-col gap-3">
            <div className="font-oswald font-[900] uppercase text-large">
              Quick Links
            </div>
            {/* <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
                  Home
                </div>
                <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
                  Classes
                </div> */}
            <div onClick={() => {setCategory('trending'), navigate('/')}} className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
              Home
            </div>
            <div onClick={() => {setCategory('politics'), navigate('/politics')}} className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
              Politics
            </div>
            <div onClick={() => {setCategory('climate'), navigate('/climate')}} className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
              Climate
            </div>
            <div onClick={() => {setCategory('business'), navigate('/business')}} className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
              Business
            </div>
            {/* <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
              FAQs
            </div>
            <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
              Customer Support
            </div> */}
          </div>

          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">

            <div className="flex flex-col gap-3">
              <div className="font-oswald font-[900] uppercase text-large">
                Services
              </div>
              <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
                CRM Solutions
              </div>
              <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
                Marketing Automation
              </div>
              <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
                Customer Support
              </div>
              <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
                Finance
              </div>
              <div className="text-[0.8rem] text-white/[0.5] hover:text-white cursor-pointer">
                Retail
              </div>

            </div>

          </div>
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className=" justify-center md:justify-start">
          <div className="font-oswald font-[900] uppercase text-large mb-[4%]">
            Social Media
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <div onClick={() => window.open("https://facebook.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaFacebookF size={20} />
            </div>
            <div onClick={() => window.open("https://twitter.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaTwitter size={20} />
            </div>
            <div onClick={() => window.open("https://youtube.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaYoutube size={20} />
            </div>
            <div onClick={() => window.open("https://instagram.com", "_blank")} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2024 News, Inc. All Rights Reserved
        </div>
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms & Conditions / Privacy Policy
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">

          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer