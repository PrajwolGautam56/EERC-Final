const client = [
  {
    imageUrl: "images/clients/1.png",
  },
  {
    imageUrl: "images/clients/2.png",
  },
  {
    imageUrl: "images/clients/3.png",
  },
  {
    imageUrl: "images/clients/4.png",
  },
  {
    imageUrl: "images/clients/5.png",
  },
  {
    imageUrl: "images/clients/6.png",
  },
  {
    imageUrl: "images/clients/7.png",
  },
  {
    imageUrl: "images/clients/8.png",
  },
  {
    imageUrl: "images/clients/9.png",
  },
  {
    imageUrl: "images/clients/10.png",
  },
  {
    imageUrl: "images/clients/11.png",
  },
  {
    imageUrl: "images/clients/12.png",
  },

  // More people...
];

export default function Clients() {


    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-bold text-2xl text-amber-500">
            Major Clients
          </h2>
          
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 ">
            
        


        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 ">
          {client.map((clients) => (
            <div key={clients.imageUrl}>
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1  "
                src={clients.imageUrl}
                alt="Transistor"
                width={158}
                height={58}
              />
            </div>
          ))}

         
        </div>
      </div>
    </div>
    </div>
  );
}
