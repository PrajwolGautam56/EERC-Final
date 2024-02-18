// Inside AboutUs.js
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
// import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Nav from "../components/Nav";
import Abouts from "../components/Abouts";
// import About from '../components/About';
import services from "../API/services.json";
import FooterWithSocialMediaIcons from "../components/FooterWithSocialMediaIcons";
import Mission from "../components/Mission";

const About = () => {
  return (
    <>
      <Nav />
      
      <Abouts />
      <Mission />
      <div>
        
        <br /> <br /> <br /> <br />
         
        <div className="bg-gray-100">
          {/* Company History Section */}
       
          {/* Services Section */}

          <section className="bg-white py-16">
            <div className="container mx-auto text-center">
              <h2 className=" text-2xl font-bold text-amber-500	 mb-8">Our Services</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.services.map((service) => {
                  return (
                    <div
                      key={service.serviceId}
                      className="bg-red-200 p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-4">
                        {" "}
                        {service.name}
                      </h3>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  );
                })}

                {/* Service Card 1 */}

                

                {/* Service Card 2 */}
                

                {/* Service Card 3 */}
                
              </div>
            </div>
          </section>
        </div>
      </div>

      <FooterWithSocialMediaIcons />
    </>
  );
};

export default About;
