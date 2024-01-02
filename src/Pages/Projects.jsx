// Inside AboutUs.js
import React from 'react';
import {  BsFacebook} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Nav from '../components/Nav';
import ServicesDetail from '../components/ServicesDetail';
// import About from '../components/About';
import services from "../API/services.json";
import FooterWithSocialMediaIcons from '../components/FooterWithSocialMediaIcons';

const Projects = () => {
  return (
    <><Nav />
    <div className="">
   
     
      <section className="dotted text-black h-[30vh] flex items-center justify-center relative overflow-hidden">
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s Roboto-Slab">About Our Company</h1>
          <p className="text-xl animate__animated animate__fadeIn animate__delay-2s Roboto-Slab text-[#5DB85E]">Dedicated to Excellence</p>
        <p className='text-[#5DB85E]'> Find us on</p>

        <ul className="flex justify-center p-2 text-[#5DB85E]">
                                            <li className=' pl-1'> <BsFacebook /> </li>
                                            <li className='  pl-5'> <BsInstagram  /> </li>
                                            {/* <li className=' pl-5'> <BsTwitterX  /> </li> */}
                                            <li className='  pl-5'> <BsLinkedin  /> </li> 
                                    </ul>
        </div>
        
         
      </section>

      <br /> <br />  <br /> <br />

   
      <section className="py-3 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="lg:pr-0">
          <div className='p-8 m-6'>
        <img class="float-left  w-200" src="../../public/images/services/1.png" />
         
            <p className="text-base text-gray-700 ml-2">
            <span className='text-[#5DB85E] text-xl'>The Environment and Engineering Research Center Pvt. Ltd (EERC)</span> 
      is a consulting and research institute registered in 6th May 2016 in the Office of Company Registrar at Tripureshwor, Kathmandu.   is a consulting and research institute registered in 6th May 2016 in the Office of Company Registrar at Tripureshwor, Kathmandu. The Environment and Engineering Research Center Pvt. Ltd has an interdisciplinary team dedicated to understand the problems of development field relating to environment nexus and their potential solutions. we are a consulting and research institute registered on 6th May 2016 in the Office of Company Registrar at Tripureshwor, Kathmandu.  

            </p></div>
            
             
               
            
          </div>
          <div className="mr-4 lg:ml-0 mt-6 lg:mt-0 pr-4 ">
            <div className="space-y-4 float-right ml-4 pr-4 ">
              <div className="flex items-center p-2  pr-4  ">
                <div className="w-12 h-12 bg-gradient-to-r from-info to-black text-black rounded-xl flex items-center justify-center  pr-4  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-700 pl-2">
                More than 40 BES/IEE/EIA for several
                  <br />
                  infrastructure developments.                </p>
              </div>



              <div className="flex items-center p-2">
                <div className="w-12 h-12 bg-gradient-to-r from-info to-black text-black rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-700 pl-2">
                More than 30 DRRM and CCA Plans,
                  <br />
                  Capacity Building trainings.                </p>
              </div>



              <div className="flex items-center p-2">
                <div className="w-12 h-12 bg-gradient-to-r from-info to-black text-black rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-700 pl-2">
                Experienced In All Seven Provinces and Worked <br />
                 in almost 20 municipalities (rural and urban).
                </p>
              </div>
              {/* Similar blocks for other features */}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-gray-100">
      {/* Company History Section */}
      <section className="py-16 dotted">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-yellow-500">Company History</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
          EERC is a consulting and research institute registered in 6th May 2016 in the Office of Company Registrar at Tripureshwor, Kathmandu.   is a consulting and research institute registered in 6th May 2016 in the Office of Company Registrar at Tripureshwor, Kathmandu. The Environment and Engineering Research Center Pvt. Ltd has an interdisciplinary team dedicated to understand the problems of development field relating to environment nexus and their potential solutions. we are a consulting and research institute registered on 6th May 2016 in the Office of Company Registrar at Tripureshwor, Kathmandu.  
          </p>
        </div>
      </section>

      {/* Services Section */}

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl  font-bold mb-8">Our Services</h2>

 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.services.map((service) => {
         
         return (
          <div key={service.serviceId} className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4"> {service.name}</h3>
              <p className="text-gray-700">
              {service.description}
              </p>
            </div>

           );
        })}
          
           
           
            {/* Service Card 1 */}

            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Environmental Assessments and Geology</h3>
              <p className="text-gray-700">
              BES, IEE, EIA, SIA, SEA, Environmental Auditing, MP preparation, Geological and Geo hazard Assessments.
              </p>
            </div>






            {/* Service Card 2 */}
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Engineering and Infrastructure

</h3>
              <p className="text-gray-700">
              Detail Project Report and Detailed Architectural Drawings, Detailed Cost Estimate and BoQ preparation 
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Disaster Risk Reduction and Management Planning</h3>
              <p className="text-gray-700">
              Nature Based Solution Study and Assessments, Climate Resilience Planning , LAPA, LDCRP, Vulnerability , Adaptation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
      
    </div>

    
       


   <FooterWithSocialMediaIcons />
    </>

       
  );
};

export default Projects;
