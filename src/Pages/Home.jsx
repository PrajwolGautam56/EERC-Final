import { Button } from "flowbite-react";
import Earth from "../components/Earth";
import "../CSS/Home.css";
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import ServicesDetail from "../components/ServicesDetail";
import Project from "../components/Project";
import ProjectSection from "../components/ProjectSection";
import FooterWithSocialMediaIcons from "../components/FooterWithSocialMediaIcons";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import About from "../components/About";
// import Team from "../components/Team";
import Clients from "../components/Clients";
import Area from "../components/Area";
import Ourteam from "../components/Ourteam";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import data from "../data.json";

 


export default function Home() {
  return (
    <div className="landing-home">
      <Nav className="z-50" />
      <div className="flex flex-row">
        <div className="basis-5/5 -mt-12">
          <div className="banner-content-two  min-[10px]:pl-5 min-[400px]:px-8 min-[1250px]:px-28 pt-40  firstView text-[#ffffff] ">
            <br></br> <br></br>
            <br></br>
            <span className="sub-title  sm:text-md lg:text-xl ">
              Hey there! EERC welcomes you.
            </span>
            <h2 className="title py-4 font-extrabold titleFont   sm:text-6xl md:text-5xl min-[1200px]:text-5xl  tracking-wide">
              Building Resilience, <br /> Protecting our
              <span className="text-[#5DB85E]"> Planet.</span>
              <br />
            </h2>
            <div className="banner-content-bottom flex pt-12">
              <Button
                gradientMonochrome="pink"
                className="rounded-3xl w-44 font-bold text-xl"
              >
                {" "}
                <a href="contact.html" className="text-xl">
                  Contact Us <span></span>
                </a>
              </Button>
              <ul className="flex ml-5 mt-2 p-2">
                <li className=" pl-5">
                  {" "}
                  <FaFacebook />{" "}
                </li>
                <li className="  pl-5">
                  {" "}
                  <FaInstagram />{" "}
                </li>
                <li className=" pl-5">
                  {" "}
                  <FaTwitter />{" "}
                </li>
                <li className="  pl-5">
                  {" "}
                  <FaLinkedin />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" earthComponent">
          {/* <img src="../../public/images/earth.png" alt="animated earth" className='pt-4 h-full w-full'  /> */}

          <Earth />
          <About />

          <ServicesDetail />

          <Project />

          <Area />
          

        
          <Ourteam />
         
          <Clients />
          <Testimonial testimonialData={data} />
           
          <Newsletter />
          <Gallery />
         
          
          <FooterWithSocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
