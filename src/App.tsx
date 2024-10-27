import "react-multi-carousel/lib/styles.css";
import BannerCategories from "./ui/BannerCategories";
import HomeBanner from "./ui/HomeBanner";
import Hightlights from "./ui/Hightlights";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";
import Shopbyemotion from "./ui/Shopbyemotion";
// import Blog from "./ui/Blog";
import CollectionSection from "./ui/Collectionsection";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from "./ui/Footer";
// import AboutUs from "./Foot/AboutUs.tsx";
// import Art from "./Foot/Art.tsx";
// import BuyPack from "./Foot/BuyPack.tsx";
// import Contact from "./Foot/ContactUs.tsx";
// import Exchange from "./Foot/Exchange.tsx";
// import Faq from "./Foot/Faq.tsx";
// import GPR from "./Foot/GPR.tsx";
// import KnowUs from "./Foot/KnowUs.tsx";
// import Lending from "./Foot/Lending.tsx";
// import Personalisation from "./Foot/Persionalisatio.tsx";
// import Repair from "./Foot/Repair.tsx";
// import Returns from "./Foot/Return.tsx";
// import TermsConditions from "./Foot/TermConditions.tsx";

function App() {
  return (
    <main>
      
      <BannerCategories />
      <HomeBanner />
      <Hightlights />
      <Categories />
      {/* Blog */}
      {/* <Blog /> */}
      <CollectionSection/>
       {/* DiscountedBanner */}
       <Shopbyemotion />
      
     
      {/* ProductList */}
      <ProductList />
      
    </main>

    // <Router>
    
    // <div>
    //   <BannerCategories />
    //   <HomeBanner />
    //   <Hightlights />
    //   <Categories />
    //   {/* Blog */}
    //   <Blog />
    //   {/* DiscountedBanner */}
    //   <DiscountedBanner />
    //   {/* ProductList */}
    //   <ProductList />
     
    //   <Routes>
    //       {/* Use element instead of component */}
    //       <Route path="/aboutUs" element={<AboutUs />} />
    //       <Route path="/knowUs" element={<KnowUs />} />
    //       <Route path="/contactUs" element={<Contact />} />
    //       <Route path="/returns" element={<Returns />} />
    //       <Route path="/exchange" element={<Exchange />} />
    //       <Route path="/termCondition" element={<TermsConditions />} />
    //       <Route path="/personalisation" element={<Personalisation />} />
    //       <Route path="/art" element={<Art />} />
    //       <Route path="/lending" element={<Lending />} />
    //       <Route path="/gpr" element={<GPR />} />
    //     </Routes>
    //     <Footer/>
    //     </div>
   
    // </Router>

  );
}

export default App;
