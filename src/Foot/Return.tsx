// import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Returns = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col justify-center items-center text-left border border-gray-400 rounded-3xl max-h-[700px] max-w-[1300px] mt-8 p-10 ml-[115px] mb-5 bg-[#dac8c8] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
      <i onClick={goBack} className="fa-solid fa-arrow-left text-xl mb-5 cursor-pointer"></i>
      <h1 className="text-4xl mb-5">Policies</h1>
      <h2 className="text-2xl mt-5 mb-2">Harmaig's 30-Day Money Back Policy</h2>
      <p className="text-lg leading-relaxed text-gray-800 mb-5">
        Under our 30-day money back policy (note: this does not apply to solitaires above INR 3 lakh and coins), you will receive a 100% refund, credited to your Harmaig account.
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mb-5">
        <strong>Harmaig Cash:</strong> You can choose to have the refund sent to your original payment method or bank account.
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mb-5">
        <strong>Harmaig Gold Wallet:</strong> You can use this credit for future purchases, but the amount cannot be refunded in cash.
      </p>
      <h2 className="text-2xl mt-5 mb-2">Will I have to pay for return shipping under the 30-day money back policy?</h2>
      <p className="text-lg leading-relaxed text-gray-800 mb-5">
        No, we offer FREE return shipping across India for all products under this policy.
      </p>
      <h2 className="text-2xl mt-5 mb-2">How do I return a product to Harmaig within 30 days?</h2>
      <p className="text-lg leading-relaxed text-gray-800 mb-5">Select the item you wish to return from your order.</p>
      <ol className="list-decimal pl-5 text-lg leading-relaxed text-gray-800 mb-5">
        <li className="mb-4">Pack the jewellery in its original packaging along with any certification.</li>
        <li className="mb-4">If the product is valued under INR 35,000, simply hand it over to the pickup personnel.</li>
        <li className="mb-4">
          For products valued above INR 35,000:
          <ul className="list-disc pl-10">
            <li className="mb-2">If a Harmaig employee picks up the item, hand it over directly.</li>
            <li className="mb-2">
              If a third-party logistics partner handles the pickup, you'll receive a tamper-proof packet from us. Secure and seal your jewellery in it before handing it over. Once sealed, the packet cannot be opened without destroying it.
            </li>
          </ul>
        </li>
        <li className="mb-4">Collect a receipt or confirmation of the pickup (e.g., paper receipt, tracking photo, SMS confirmation).</li>
      </ol>
      <p className="text-lg leading-relaxed text-gray-800 mb-5">
        Once we receive the product at our facility and complete a quality check, your refund will be processed within 2-3 working days to your Harmaig account.
      </p>
    </div>
  );
};

export default Returns;
  