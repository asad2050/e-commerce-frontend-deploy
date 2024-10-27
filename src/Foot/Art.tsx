import React from 'react';

const Art: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-left p-5 max-w-2xl mx-auto border border-gray-400 rounded-3xl font-sans mt-5 mb-5 bg-[#dac8c8]">
      <h1 className="text-4xl mb-6">Art of Gifting - Harmaig Terms and Conditions</h1>
      <ul className="text-lg leading-relaxed text-gray-700 pl-5">
        <li className="mb-4">
          <strong>Gift Packaging:</strong> All purchases can be packaged in premium Harmaig gift boxes upon request. This service is complimentary for select items.
        </li>
        <li className="mb-4">
          <strong>Gift Vouchers:</strong> Harmaig gift vouchers are available for purchase and can be redeemed within 12 months from the date of issue. Vouchers are non-transferable and cannot be exchanged for cash.
        </li>
        <li className="mb-4">
          <strong>Gift Returns:</strong> Products received as gifts can be returned within 30 days, subject to standard return policies. The refund will be issued as Harmaig Credits to the recipient’s account, which can be used for future purchases.
        </li>
        <li>
          <strong>Gift Exchanges:</strong> Gift recipients may opt for exchanges under our Lifetime Exchange policy. However, any price differences between the exchanged items will be adjusted accordingly.
        </li>
      </ul>
    </div>
  );
};

export default Art;
