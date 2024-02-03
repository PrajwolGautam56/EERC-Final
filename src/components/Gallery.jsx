import React from 'react'

function Gallery() {
  return (
    <div>
    <div className="container mx-auto text-center py-5 "> 
        <h1 className="font-sans Montserrat  text-3xl font-bold text-black-500	  mb-8">Our Project's Gallery</h1>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-2">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/1.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/2.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/3.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/4.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/5.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/6.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/2.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/5.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="./../public/images/projects/1.jpeg" alt="" />
    </div>
     
     
</div>

    </div>
  )
}

export default Gallery
