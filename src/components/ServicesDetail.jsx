import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import services from "../API/services.json";
function ServicesDetail() {
  return (
    <>
    <hr></hr>
    <section className="dotted  px-8">

      {/* Heading section for Services */}
      <div
        data-aos=" justify zoom-in"
        className="  mx-1 lg:text-5xl font-extrabold  "
      >
        <div className="title py-4 font-extrabold text-2xl  tracking-wide ">
          <h1 className="text-left text-amber-500	"> Our Services</h1>{" "}
        </div>
        <p className=" font-sans	 Montserrat   text-gray-700    font-medium	 mx-auto sm:text-sm">
      <span className="text-[#5DB85E] sm:text-xl " >EERC </span>  
      is a consulting and research institute registered in  <br></br> 6th May 2016
       the Office of Company Registrar Kathmandu.  
      </p>
      </div>

      {/* Content section for rendering services from JSON  */}
      <div className="mt-5  grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.services.map((service) => {
         
          return (
            //

            <div  key={service.serviceId}className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-transform hover:scale-105">
              <div className="p-4 flex-1">
                <h3 className="flex items-center text-xl font-semibold text-black mb-2">
                  <i className="mr-2 fas fa-wrench"></i>
                  {service.name}
                </h3>
                <p className="text-back-200">{service.description}</p>
              </div>
              <div className="p-4">
                <div className="relative">
                  <img
                    src="../../public/images/services/1.png"
                    alt="Service 1"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            // </div>
          );
        })}
      </div>
      </section><br></br>
      <hr></hr>
    </>
  );
}

export default ServicesDetail;
