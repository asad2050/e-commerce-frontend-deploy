// import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exchange = () => {
  const navigate = useNavigate(); // Hook for navigation

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  }

  return (
    <div className="flex flex-col justify-center items-center text-center p-16 max-h-[700px] max-w-6xl mx-auto my-5 border border-gray-300 rounded-3xl bg-[#dac8c8] overflow-y-auto">
      <i onClick={goBack} className="fa-solid fa-arrow-left text-xl cursor-pointer absolute top-5 left-5 text-gray-700 hover:text-black"></i>

      <h1 className="text-4xl font-semibold mb-5 mt-5">Lifetime Exchange and Buy-Back</h1>
      <p className="text-lg mb-5">
        We offer Lifetime Exchange and Buy-Back for all Harmaig purchases within India. You can initiate these processes by visiting a store or through an online request. The exchange or buy-back value will be based on the market price on the day of the request. For online exchanges or buy-backs, a processing charge of INR 500 for shipping and handling will be applied. If done at a store, no such charge will be applicable.
      </p>

      <h2 className="text-2xl font-medium mt-5 mb-4">Please note:</h2>
      <ul className="list-disc list-inside text-lg mb-5">
        <li>Any discounts or gifts received during your purchase will be deducted from the refund or exchanged value. You may also choose to return the gift.</li>
        <li>If a solitaire certificate is missing, a standard deduction of INR 3,500 will apply. For larger solitaires, the deduction may be higher depending on the size.</li>
      </ul>

      <h2 className="text-2xl font-medium mt-5 mb-4">Lifetime Exchange</h2>
      <p className="text-lg mb-5">
        The final exchange value will be credited as Harmaig Gold Wallet after a Quality Check (QC). These credits are valid for 365 days and can be used to purchase jewellery (excluding Coins and Solitaires). Credits cannot be converted into cash.
      </p>

      <h2 className="text-2xl font-medium mt-5 mb-4">Lifetime Buy-Back</h2>
      <p className="text-lg mb-5">
        The final buy-back value will be credited as Harmaig Cash in Harmaig Gold Wallet after QC. This cash is valid for 365 days and can be used for future purchases or can be encashed.
      </p>
    </div>
  );
};

export default Exchange;
