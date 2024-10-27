// import React from 'react';
import { useNavigate } from 'react-router-dom';

const Personalisation = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col justify-center items-center text-left p-5 border border-gray-400 rounded-3xl max-w-[800px] mt-5 ml-[365px] mb-5 bg-[#dac8c8]">
      <i onClick={goBack} className="fa-solid fa-arrow-left text-xl mb-5 cursor-pointer"></i>
      <h1 className="text-3xl mb-5">Personalisation - Harmaig Terms and Conditions</h1>
      <ul className="text-lg leading-relaxed text-gray-800 pl-5">
        <li className="mb-4">
          <strong>Customization Scope:</strong> Personalisation services include engraving, resizing, and custom design modifications. All personalization requests are subject to feasibility based on the jewellery's design and material.
        </li>
        <li className="mb-4">
          <strong>Charges:</strong> Additional charges may apply for personalization services, depending on the complexity of the request and materials used. These will be communicated before proceeding with the work.
        </li>
        <li className="mb-4">
          <strong>Non-Refundable:</strong> Customized products are non-refundable and non-returnable under the 30-day money back policy unless there is a manufacturing defect.
        </li>
        <li className="mb-4">
          <strong>Timeframe:</strong> The completion of personalized orders depends on the extent of customization. Estimated timelines will be provided, and delays due to complex customizations may occur.
        </li>
        <li className="mb-4">
          <strong>Approval Process:</strong> For extensive customizations, Harmaig will provide design mockups. Once approved by the customer, further changes will not be accepted.
        </li>
      </ul>
    </div>
  );
};

export default Personalisation;
