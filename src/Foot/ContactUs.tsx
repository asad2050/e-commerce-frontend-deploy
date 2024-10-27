// import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Contact = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-wrap justify-center items-center p-16 text-center max-w-4xl mx-auto my-5 border border-gray-300 rounded-3xl bg-[#dac8c8] overflow-y-auto max-h-[600px]">
      <i onClick={goBack} className="fa-solid fa-arrow-left text-xl cursor-pointer absolute top-5 left-5 text-gray-700 hover:text-black"></i>
      
      <h1 className="w-full text-4xl font-semibold mb-8">Contact Us</h1>

      <h2 className="w-full text-2xl font-medium mb-4">Co-Founders</h2>
      <div className="flex-1 m-4 p-4 border border-gray-300 rounded-xl bg-white shadow-md">
        <p><strong>Manasvi Kushwaha</strong><br />
          Co-Founder<br />
          +91 7021920836<br />
          <a href="mailto:manasvi@harmaig.com" className="text-blue-500">manasvi@harmaig.com</a>
        </p>
      </div>

      <div className="flex-1 m-4 p-4 border border-gray-300 rounded-xl bg-white shadow-md">
        <p><strong>Yeeshu Soni</strong><br />
          Co-Founder<br />
          +91 9516136454<br />
          <a href="mailto:yeeshu@harmaig.com" className="text-blue-500">yeeshu@harmaig.com</a>
        </p>
      </div>

      <h2 className="w-full text-2xl font-medium mb-4">CEO</h2>
      <div className="flex-1 m-4 p-4 border border-gray-300 rounded-xl bg-white shadow-md">
        <p><strong>Vishal Tiwari</strong><br />
          Chief Executive Officer<br />
          +91 9118446955<br />
          <a href="mailto:vishal.harmaig@gmail.com" className="text-blue-500">vishal.harmaig@gmail.com</a>
        </p>
      </div>

      <h2 className="w-full text-2xl font-medium mb-4">Sales</h2>
      <div className="flex-1 m-4 p-4 border border-gray-300 rounded-xl bg-white shadow-md">
        <p><strong>Mohammad Hasaan Naurez</strong><br />
          Chief Sales Officer<br />
          +91 7033778219<br />
          <a href="mailto:hasaan.harmaig@gmail.com" className="text-blue-500">hasaan.harmaig@gmail.com</a>
        </p>
      </div>

      <h2 className="w-full text-2xl font-medium mb-4">Marketing</h2>
      <div className="flex-1 m-4 p-4 border border-gray-300 rounded-xl bg-white shadow-md">
        <p><strong>Poorvi Agarwal</strong><br />
          Chief Marketing Officer<br />
          +44 7741 914852<br />
          <a href="mailto:poorvi.harmaig@gmail.com" className="text-blue-500">poorvi.harmaig@gmail.com</a>
        </p>
      </div>

      <h2 className="w-full text-2xl font-medium mb-4">Design</h2>
      <div className="flex-1 m-4 p-4 border border-gray-300 rounded-xl bg-white shadow-md">
        <p><strong>Harsh Vara</strong><br />
          Chief Design Officer<br />
          +91 90015001695<br />
          <a href="mailto:harsh.harmaig@gmail.com" className="text-blue-500">harsh.harmaig@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
