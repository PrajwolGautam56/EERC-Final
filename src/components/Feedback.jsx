// // Feedback.js

// export default function Feedback() {
// 	return(
// 		<div className="absolute mt-52 ml-48 sm:block
// 						w-1/3 float-left border-2 p-2
// 						rounded-xl shadow-xl text-xl">
// 			<form>
// 				<p className="text-2xl">Feedback & Queries</p>
// 				<div>
// 					<label className="text-sm">Select Issue*</label>
// 					<br></br>
// 					<select className="bg-gray-50 border border-gray-300
// 										text-gray-600 text-sm rounded-lg
// 										focus:border-blue-500 w-full p-2.5">
// 						<option value="Feedback" >
// 							-- Select Your Query --
// 						</option>
// 						<option value="Feedback" >
// 							Feedback
// 						</option>
// 						<option value="Feedback">
// 							Service Related Queries
// 						</option>
// 						<option value="Feedback">
// 							Projects Related Issue
// 						</option>
// 						<option value="Feedback">
// 							Career Related Queries
// 						</option>
// 						<option value="Feedback">
// 							Work With Us
// 						</option>
// 					</select>
// 					<br></br>
// 					<label className="text-sm">Email Address*</label>
// 					<br></br>
// 					<input className="bg-gray-50 border border-gray-300
// 										text-sm rounded-lg focus:border-blue-500
// 										w-full p-2.5"
// 							type="email"
// 							placeholder="info@eerc.com.np"/>
// 					<br></br>
// 					<label className="text-sm">Contact No.</label>
// 					<br></br>
// 					<input className="bg-gray-50 border border-gray-300
// 										text-sm rounded-lg focus:border-blue-500
// 										w-full p-2.5"
// 							type="text"
// 							placeholder="1324567890"/>
// 					<br></br>
// 					<label className="text-sm">
// 						Drop Your Query
// 					</label>
// 					<br></br>
// 					<textarea className="bg-gray-50 border border-gray-300
// 											text-sm rounded-lg
// 											focus:border-blue-500
// 											w-full p-2.5"
// 								rows="4"
// 								cols="25"
// 								maxlength="300"
// 								placeholder="Max Allowed Characters: 300">
// 					</textarea>
// 					<br></br>
// 					<button className="bg-blue-500 hover:bg-blue-700
// 										text-white font-bold
// 										py-2 px-4 rounded"
// 							type="button">
// 						Submit
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	)



import { useState } from "react";
import axios from "axios";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api", formData);
      console.log(response.data);
      setSubmitted(true);
      // Clear form data after submission
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      // Add any further logic or UI updates on successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors or display an error message to the user
    }
  };

  return (
    <div
      className="absolute mt-52 ml-48 sm:block
                    w-1/3 float-left border-2 p-2 
                    rounded-xl shadow-xl text-xl"
    >
      <form>
        <p className="text-2xl">Feedback & Queries</p>
        <div>
          <label className="text-sm">Name</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
            type="text"
            placeholder="John Doe"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <br></br>
          <label className="text-sm">Email Address*</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
            type="email"
            placeholder="info@eerc.com.np"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <br></br>
          <label className="text-sm">Contact No.</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
            type="text"
            placeholder="1324567890"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
          <br></br>
          <label className="text-sm">Drop Your Query</label>
          <br></br>
          <textarea
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 w-full p-2.5"
            rows="4"
            cols="25"
            maxLength="300"
            placeholder="Max Allowed Characters: 300"
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <br></br>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>

          {submitted && (
            <div className="text-green-500 mt-2">
              Submitted successfully! {/* Add your notification message here */}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
