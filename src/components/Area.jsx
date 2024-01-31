import React from 'react'

function Area() {
  return (
    <div>
        <div className="container mx-auto text-center py-5">
            <h2 className="font-sans Montserrat  text-sml font-bold text-amber-500	  mb-8">Areas of Work</h2>
            <p className=" font-sans	 Montserrat text-2xl  text-gray-700   font-medium	 mx-auto">
            <span className="text-[#5DB85E] " >EERC, </span>  
            our works contribute to one or multiple  <span className="text-[#5DB85E] " >of the following </span>  sectors. 
            </p>
            <br></br>
         </div>

         {/* <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
         
         
            <div className="p-4"> 
                <div className="">

                </div>
                  

                  <h3 className="flex items-center text-xl font-semibold text-black mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                  1.Areas 
                </h3>
            </div>
              
         </div> */}


         <div >
         <ul className="grid grid-cols-3 ml-48">
           <li className='flex ' >

                <img
                    src="https://www.flaticon.com/free-icons/door-lock"
                    alt="Service 1"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                <p>Technology for DRRM</p>
            </li>
            <li className='flex  '>

<img
    src="public/images/services/1.png"
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Tool for Data Collection & Visualization</p>
</li> <li className='flex '>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Digital Mapping</p>
</li>
 <li className='flex '>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Web GIS</p>
</li> <li className='flex'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Drone Consulting Services</p>
</li> <li className='flex'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Geospatial Analysis</p>
</li> <li className='flex'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Map Literacy Trainings</p>
</li> <li className='flex'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Creative Graphic Design</p>
</li> <li className='flex'>

<img
    src={`public/images/services/1.png`}
    alt="Service 1"
    className="w-20 h-20 object-cover rounded-full"
  />
<p>Participatory Community Mapping (Hybrid Approach)</p>
</li>
   </ul>
          
            
                    
        
                
        </div>
    </div>
  )
}

export default Area
