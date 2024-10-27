// // import React from "react";
// // import Container from "./Container";
// // import { payment } from "../assets";
// // import FooterTop from "./FooterTop";

// // const Footer = () => {
// //   return (
// //     <div className="mt-10 bg-white">
// //       <FooterTop />
// //       <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
// //          <p>Sitemap | Legal & Privacy</p>
// //         <p> Harmaig. All rights reserved.</p>
// //         <img src={payment} alt="payment-img" className="object-cover" />
// //       </Container>
// //     </div>
// //   );
// // };

// // export default Footer;


// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-300 py-10 text-gray-800">
//       <div className="container mx-auto px-6 flex flex-wrap justify-around">
//         {/* Gold API Section */}
//         <div className="w-full md:w-auto mb-6">
//           <h4 className="text-xl font-bold mb-4 text-black">Gold API</h4>
//           <ul>
//             <li className="mb-2"><Link to="/aboutUs" className="text-slate-800 hover:underline">About Us</Link></li>
//             <li className="mb-2"><Link to="/knowUs" className="text-blue-600 hover:underline">Know Us</Link></li>
//             <li className="mb-2"><Link to="/contactUs" className="text-blue-600 hover:underline">Contact Us</Link></li>
//             {/* <li className="mb-2"><Link to="/faq" className="text-blue-600 hover:underline">FAQs</Link></li> */}
//             <li className="mb-2 text-blue-600 hover:underline">FAQs</li>
//           </ul>
//         </div>

//         {/* Policies Section */}
//         <div className="w-full md:w-auto mb-6">
//           <h4 className="text-xl font-bold mb-4 text-black">Policies</h4>
//           <ul>
//             <li className="mb-2"><Link to="/returns" className="text-blue-600 hover:underline">30-Day Returns</Link></li>
//             <li className="mb-2"><Link to="/exchange" className="text-blue-600 hover:underline">Lifetime Exchange</Link></li>
//             {/* <li className="mb-2"><Link to="/buyPack" className="text-blue-600 hover:underline">Buy Back</Link></li> */}
//             <li className="mb-2 text-blue-600 hover:underline">Buy Back</li>
//             <li className="mb-2"><Link to="/termCondition" className="text-blue-600 hover:underline">Terms & Conditions</Link></li>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div className="w-full md:w-auto mb-6">
//           <h4 className="text-xl font-bold mb-4 text-black">Services</h4>
//           <ul>
//             {/* <li className="mb-2"><Link to="/repairs" className="text-blue-600 hover:underline">Repairs</Link></li> */}
//             <li className="mb-2 text-blue-600 hover:underline">Repairs</li>
//             <li className="mb-2"><Link to="/personalisation" className="hover:text-gray-500 hover:underline">Personalisation</Link></li>
//             <li className="mb-2"><Link to="/art" className="text-blue-600 hover:underline">Art of Gifting</Link></li>
//             <li className="mb-2"><Link to="/lending" className="text-blue-600 hover:underline">Lending</Link></li>
//             <li className="mb-2"><Link to="/gpr" className="text-blue-600 hover:underline">Gold SIP and Reward</Link></li>
//           </ul>
//         </div>

//         {/* Features Section */}
//         <div className="w-full md:w-auto mb-6">
//           <h4 className="text-xl font-bold mb-4 text-black">Features</h4>
//           <ul>
//             {/* <li className="mb-2"><Link to="/gold-subscription" className="text-blue-600 hover:underline">Gold Subscription</Link></li> */}
//             <li className="mb-2 text-blue-600 hover:underline">Gold Subscription</li>
//             <li className="mb-2 text-blue-600 hover:underline">Gold Investment</li>
//             {/* <li className="mb-2"><Link to="/gold-investment" className="text-blue-600 hover:underline">Gold Investment</Link></li> */}
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div className="w-full md:w-auto mb-6">
//           <h4 className="text-xl font-bold mb-4 text-black">Contact</h4>
//           <ul>
//             <li className="mb-2">Email: <a href="mailto:hello@harmaig.com" className="text-blue-600 hover:underline">hello@harmaig.com</a></li>
//             <li className="mb-2">Mobile: <a href="tel:+917021920836" className="text-blue-600 hover:underline">+91 7021920836</a></li>
//             <li className="mb-2">Instagram: 
//               <a href="https://www.instagram.com/harmaig_jewellers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                 @harmaig_jewellers
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-gray-200 py-4 text-center mt-6">
//         <p className="text-gray-600">&copy; 2024 Harmaig Jewellers. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#d1c4c4] text-gray-800 py-5 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around">
          
          {/* Gold API Section */}
          <div className="mb-6">
            <h4 className="text-2xl font-bold mb-4">Gold API</h4>
            <ul className="space-y-3 text-1xl">
              <li><Link to="/aboutUs" className="hover:text-gray-500">About Us</Link></li>
              <li><Link to="/knowUs" className="hover:text-gray-500">Know Us</Link></li>
              <li><Link to="/contactUs" className="hover:text-gray-500">Contact Us</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-500">FAQs</Link></li>
              {/* <li className="mb-2 hover:text-gray-500 hover:underline">FAQs</li> */}
            </ul>
          </div>

          {/* Policies Section */}
          <div className="mb-6">
            <h4 className="text-2xl font-bold mb-4">Policies</h4>
            <ul className="space-y-3 text-1xl">
              <li><Link to="/returns" className="hover:text-gray-500">30-Day Returns</Link></li>
              <li><Link to="/exchange" className="hover:text-gray-500">Lifetime Exchange</Link></li>
              {/* <li className="hover:text-gray-500">Buy Pack</li> */}
              <li><Link to="/#" className="hover:text-gray-500">Buy Pack</Link></li>
              <li><Link to="/termCondition" className="hover:text-gray-500">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-6">
            <h4 className="text-2xl font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-1xl">
             
              <li><Link to="/#" className="hover:text-gray-500">Repairs</Link></li>
              <li><Link to="/personalisation" className="hover:text-gray-500">Personalisation</Link></li>
              <li><Link to="/art" className="hover:text-gray-500">Art of Gifting</Link></li>
              <li><Link to="/lending" className="hover:text-gray-500">Lending</Link></li>
              <li><Link to="/gpr" className="hover:text-gray-500">Gold SIP and Reward</Link></li>
            </ul>
          </div>

          {/* Features Section */}
          <div className="mb-6">
            <h4 className="text-2xl font-bold mb-4">Features</h4>
            <ul className="space-y-3 text-1xl">
              <li><Link to="/#" className="hover:text-gray-500">Gold Subscription</Link></li>
              <li><Link to="/#" className="hover:text-gray-500">Gold Investment</Link></li>
          
              {/* <li className="hover:text-gray-500">Gold Subscription</li>
              <li className="hover:text-gray-500">Gold Investment</li> */}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6">
            <h4 className="text-2xl font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-1xl">
           
              <li className='flex gap-2'><HiOutlineMail className='gap-5 h-5'/> <a href="mailto:hello@harmaig.com"  className="hover:text-gray-500">hello@harmaig.com</a></li>
              <li className='flex gap-2'><BsWhatsapp className='gap-5 h-5'/> <a href="tel:+917021920836" className="hover:text-gray-500">+91 7021920836</a></li>
              <li className='flex gap-2'><FaInstagram className='gap-5 h-5'/>
                <a 
                  href="https://www.instagram.com/harmaig_jewellers/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-500"
                >
                  @harmaig_jewellers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-bold">&copy; 2024 Harmaig Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
