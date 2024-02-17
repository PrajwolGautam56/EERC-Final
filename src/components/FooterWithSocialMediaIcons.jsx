'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className="bg-gray-300  text-black">
      <div className="w-full " >
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Flowbite Logo"
              href="#"
              name="EERC"
              src="public/images/eercLogo.png"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-black">
            <div className="text-black">
              <Footer.Title title="about" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-black'>
                  About Us
                </Footer.Link>
                <Footer.Link href="#" className='text-black'>
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-black"/>
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/eercnepal" className='text-black'>
                  Facebook
                </Footer.Link>
                 
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-black" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-black'>
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className='text-black'>
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-black" >
          <Footer.Copyright
            by="EERC™"
            href="#"
            year={2022}
            className="text-black" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-black"
            />
             
            
             
             
          </div>
        </div>
      </div>
    </Footer>
  )
}


