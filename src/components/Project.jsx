import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectSection from "./ProjectSection";
AOS.init();

const Project = () => {
  return (
    <section className=" dotted py-2">
      <br></br>
      <br></br>
      <div className="container mx-auto px-4">
        <div
          data-aos=" justify zoom-in"
          className="   text-5xl font-extrabold   h-40"
        >
          <div className="title  font-bold text-xl  tracking-wide  float-right">
            <h1 className="float-right text-right  text-amber-500	">
              {" "}
              Hightlight Projects
            </h1>{" "}
          </div>
          <br></br>
          <p className=" font-sans	 Montserrat text-2xl  text-gray-700   font-medium	  float-right text-right">
            Some Of the
            <span className="text-[#5DB85E]  "> Key </span>
            Hightlight Projects <br></br> done by EERC team in different fields.
          </p>
        </div>

        {/* <h2 className="text-right text-3xl font-semibold text-gray-800 mb-8">
          Our Projects
        </h2>
        <p className=" font-sans	 Montserrat text-2xl  text-gray-700   font-medium	 mx-auto">
      <span className="text-[#5DB85E] text-right " >EERC </span>  
      is a consulting and research institute registered in 6th May 2016 in
       the Office of Company Registrar at Tripureshwor, Kathmandu.  
      </p> */}
        {/* Inside ProjectSection.js */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-8">
          <ProjectSection />
        </div>
      </div>
    </section>
  );
};

export default Project;
