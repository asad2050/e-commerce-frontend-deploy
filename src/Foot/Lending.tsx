// import React from 'react';

const Lending = () => {
  return (
    <div className="flex flex-col justify-center items-center text-left p-5 max-w-[800px] mt-5 ml-[365px] mb-5 border border-gray-400 rounded-3xl bg-[#dac8c8]">
      <h1 className="text-3xl mb-5">Lending - Harmaig Terms and Conditions</h1>
      <ul className="text-lg leading-relaxed text-gray-800 pl-5">
        <li className="mb-4">
          <strong>Eligibility:</strong> Harmaig offers jewellery lending services where customers can submit their own hallmark-certified jewellery to us and receive a loan or advance equivalent to a portion of its value. This service is available for jewellery items valued above INR 2 lakh and is subject to approval based on the item’s condition and market value.
        </li>
        <li className="mb-4">
          <strong>Security Deposit:</strong> A refundable security deposit is not required as the jewellery provided by the customer will serve as collateral. The loan amount will be determined based on the jewellery’s assessed value, typically up to 70-80% of the value.
        </li>
        <li className="mb-4">
          <strong>Return Period:</strong> Customers can retrieve their jewellery within the agreed loan tenure, which can range from 3 to 12 months. Early repayment of the loan will allow the customer to collect their jewellery at any time during this period. Failure to repay the loan within the tenure will lead to forfeiture of the jewellery.
        </li>
        <li className="mb-4">
          <strong>Condition of Jewellery:</strong> The jewellery must be submitted to Harmaig in its original condition and will be returned in the same form once the loan is fully repaid. Harmaig guarantees that the jewellery will be securely stored and handled with the utmost care.
        </li>
        <li className="mb-4">
          <strong>Penalties for Late Payment:</strong> If the loan is not repaid by the agreed-upon due date, Harmaig reserves the right to sell the jewellery to recover the loan amount. Late payments may also incur additional penalties as specified in the loan agreement.
        </li>
        <li className="mb-4">
          <strong>Non-Eligibility for Return:</strong> The jewellery submitted as collateral cannot be returned or exchanged under any of Harmaig's regular return or buy-back policies during the loan period. It will only be returned once the loan and any associated fees are fully repaid.
        </li>
      </ul>
    </div>
  );
};

export default Lending;
