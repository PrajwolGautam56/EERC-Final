import React,{useState} from "react";

import "../CSS/contact.css";

// const ContactPage = () => {
//   return (

//  <>
//   <section id="contact">

//   <h1 class="section-header">Contact</h1>

//   <div class="contact-wrapper">

//     <form id="contact-form" class="form-horizontal" role="form">

//       <div class="form-group">
//         <div class="col-sm-12">
//           <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
//         </div>
//       </div>

//       <div class="form-group">
//         <div class="col-sm-12">
//           <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
//         </div>
//       </div>

//       <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

//       <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
//         <div class="alt-send-button">
//           <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
//         </div>

//       </button>

//     </form>

//       <div class="direct-contact-container">

//         <ul class="contact-list">
//           <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>

//           <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>

//           <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>

//         </ul>

//         <hr></hr>
//         <ul class="social-media-list">
//           <li><a href="#" target="_blank" class="contact-icon">
//             <i class="fa fa-github" aria-hidden="true"></i></a>
//           </li>
//           <li><a href="#" target="_blank" class="contact-icon">
//             <i class="fa fa-codepen" aria-hidden="true"></i></a>
//           </li>
//           <li><a href="#" target="_blank" class="contact-icon">
//             <i class="fa fa-twitter" aria-hidden="true"></i></a>
//           </li>
//           <li><a href="#" target="_blank" class="contact-icon">
//             <i class="fa fa-instagram" aria-hidden="true"></i></a>
//           </li>
//         </ul>
//         <hr></hr>

//         <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

//       </div>

//   </div>

// </section>

//  </>

//   );
// };

// export default ContactPage;


import axios from "axios";

const ContactPage = () => {
  // State variables for form data and submission state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/messages", {
        name,
        email,
        phoneNumber,
        message,
      });

      setSubmitted(true);
      setError(null); // Clear any previous errors

      // Handle success (e.g., display success message, clear form)
      console.log("Message sent successfully!");
      // ...
    } catch (error) {
      setError(error.response.data.error || "Failed to send message");
    }
  };

  return (
    <section id="contact" className="pt-20 pb-40">
      <h1 className="section-header text-4xl font-bold text-center mb-10">
        Contact
      </h1>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact form with Tailwind CSS classes */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md"
        >
          {/* Form fields with labels and validation */}
          <div className="mb-6">{/* ... form fields ... */}</div>

          {/* Submit button with loading state */}
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            disabled={submitted}
          >
            {submitted ? "Sending..." : "Send Message"}
          </button>

          {/* Success or error message */}
          {submitted && (
            <p
              className={`mt-4 text-center text-sm ${
                error ? "text-red-600" : "text-green-600"
              }`}
            >
              {error || "Message sent!"}
            </p>
          )}
        </form>

        {/* Other contact information (replace with your details) */}
        <div className="col-span-1 md:col-span-2">
          {/* ... other contact information, social media links, images, etc. */}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
