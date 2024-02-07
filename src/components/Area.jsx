import React from "react";

const icons = [
  {
    name: "Disaster Risk Reduction & Management",
    imageUrl: "public/images/icons/1.png",
  },
  {
    name: "Development Planning & Management",
    imageUrl: "public/images/icons/2.png",
  },
  {
    name: "Digital Governance",
    imageUrl: "public/images/icons/3.png",
  },
  {
    name: "Land Reform & Management",
    imageUrl: "public/images/icons/4.png",
  },
  {
    name: "Climate Change & Environment",
    imageUrl: "public/images/icons/5.png",
  },
  {
    name: "Agriculture",
    imageUrl: "public/images/icons/6.png",
  },
  {
    name: "Software Consulting & Digital Innovations",
    imageUrl: "public/images/icons/7.png",
  },
  {
    name: "Heritage Conservation & Promotion",
    imageUrl: "public/images/icons/8.png",
  },

  // More people...
];
function Area() {
  return (
    <div className="p-12 dotted">
      <div className="container mx-auto text-center p-5">
        <h2 className="font-sans Montserrat  text-xl font-bold text-amber-500	  mb-8">
          Areas of Work
        </h2>
        <p className=" font-sans	 Montserrat text-2xl  text-gray-700   font-medium	 mx-auto">
          <span className="text-[#5DB85E] ">EERC, </span>
          our works contribute to one or multiple{" "}
          <span className="text-[#5DB85E] ">of the following </span> sectors.
        </p>
        <br></br>
      </div>

      <div>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 lg:ml-48">
          {icons.map((icon) => (
            <li key={icon.imageUrl} className="flex p-4">
              <img
                src={icon.imageUrl}
                alt="Service 1"
                className="w-14 h-14 object-cover rounded-full"
              />
              <p className="p-2">{icon.name}</p>
            </li>
          ))}

          {/* <li className='flex lg:p-2 '>

<img
    src="public/images/services/1.png"
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Tool for Data Collection & Visualization</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Mapping</p>
</li>
 <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Web GIS</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Drone Consulting Services</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Geospatial Analysis</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Map Literacy Trainings</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Creative Graphic Design</p>
</li> <li className='flex lg:p-2'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Participatory Community Mapping (Hybrid Approach)</p>
</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Area;
