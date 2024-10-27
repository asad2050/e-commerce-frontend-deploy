// import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const TermsConditions = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col justify-center items-center text-left p-5 border border-gray-400 rounded-3xl max-w-[800px] mt-5 ml-[365px] mb-5 bg-[#dac8c8]">
      <i onClick={goBack} className="fa-solid fa-arrow-left text-xl mb-5 cursor-pointer"></i>
      <h1 className="text-3xl mb-5">Terms & Conditions</h1>

      <h2 className="text-2xl mt-5 mb-3">Services</h2>
      <h3 className="text-xl mt-4 mb-2">Repairs - Harmaig Terms and Conditions</h3>
      <ul className="list-disc pl-5 text-lg leading-relaxed text-gray-800">
        <li className="mb-3">
          <strong>Eligibility:</strong> Repairs will be carried out only on jewellery purchased from Harmaig. Proof of purchase (invoice, certificate) must be presented.
        </li>
        <li className="mb-3">
          <strong>Free Repairs:</strong> Jewellery under warranty will be repaired free of charge, subject to normal wear and tear conditions. Damage caused by mishandling, accidents, or unauthorized repairs will void the warranty.
        </li>
        <li className="mb-3">
          <strong>Repair Charges:</strong> For products out of warranty, repair costs will be based on the extent of damage, including material costs (if applicable). Customers will receive a quotation before any work is undertaken.
        </li>
        <li className="mb-3">
          <strong>Timeline:</strong> The time required for repairs depends on the complexity of the work. Customers will be informed of the estimated delivery date.
        </li>
        <li className="mb-3">
          <strong>Exclusions:</strong> Customized or highly intricate jewellery may not be eligible for standard repair services.
        </li>
      </ul>
    </div>
  );
};

export default TermsConditions;
