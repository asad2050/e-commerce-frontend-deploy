// import { Container } from 'lucide-react';
import  { useState } from 'react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I have to pay shipment charges?",
      answer:
        "There are no shipping/delivery charges within India. For information on shipping charges for international orders, please see the Shipping and Handling Charges section under.",
    },
    {
      question: "Sending gifts to loved ones?",
      answer:
        "You can send any product from www.harmaig.com as a gift to your loved ones, with the option to include a personalized message.",
    },
    {
      question: "What if it gets lost or mis-product?",
      answer:
        "In the rare event that you receive the wrong product, we will gladly arrange for a replacement. If a replacement is not feasible, we will issue a refund through the payment method you used at the time of purchase.",
    },
    {
      question: "What is the Cash on Delivery (COD) payment option?",
      answer:
        "Cash on Delivery is a payment method offered by Harmaig, allowing you to pay in cash upon receiving your product. No advance payment is required for COD orders.",
    },
    {
      question: "Is there an extra charge for using Cash on Delivery?",
      answer:
        "No, there is no additional fee for opting for the COD service.",
    },
    {
      question: "Is there a limit on the cart value for COD orders?",
      answer:
        "Currently, COD is available for orders with a cart value ranging between INR 1,000 and INR 10,000, depending on eligible pin codes within India.",
    },
    {
      question: "How will I receive my refund for a COD order?",
      answer:
        "Refunds for COD orders can be processed via cheque or online transfer (NEFT). Option A: If you provide a canceled cheque with the returned product, the refund will be processed via NEFT within 7-15 working days. Option B: Without a canceled cheque, the refund will be sent by cheque to the address provided at the time of the order, which may take up to 30 working days.",
    },
    {
      question: "What are the terms and conditions for Cash on Delivery?",
      answer:
        "After placing a COD order, you will receive a confirmation call from our support team. If the call is not answered, we reserve the right to cancel the order. Payment must be made in full upon delivery, and the package can only be opened after payment is completed. Partial orders cannot be delivered.",
    },
    {
      question: "How do I cancel my COD order?",
      answer:
        "You can cancel a COD order by calling customer care at 1800-266-0123 or emailing hello@harmaig.com, provided the order has not yet been shipped.",
    },
    {
      question: "What currencies are accepted for Cash on Delivery?",
      answer:
        "Only Indian Rupees (INR) are accepted for COD payments. Notes of Rs 500 and Rs 1,000, which were declared illegal on November 9, 2016, will not be accepted.",
    },
  ];

  return (
    
    <div className="max-w-7xl mx-auto h-screen bg-[#dac8c8] p-8 overflow-y-auto mt-2 mb-2 rounded-3xl">
      <section>
        <h2 className="text-center text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div
            className="faqbox bg-gray-800 text-white rounded-lg mt-4 w-full max-w-4xl mx-auto"
            key={index}
          >
            <div
              className="faq-question flex justify-between items-center p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                className={`transition-transform duration-300 ${activeQuestion === index ? 'rotate-180' : ''}`}
              >
                <path
                  d={activeQuestion === index ? 'M20 12H4' : 'M12 4V20M20 12H4'}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {activeQuestion === index && (
              <div className="faq-answer p-6 bg-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
   
  );
};

export default FAQ;
