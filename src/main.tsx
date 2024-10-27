import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Cancel from "./pages/Cancel.tsx";
import Cart from "./pages/Cart.tsx";
import Category from "./pages/Category.tsx";
import Favorite from "./pages/Favorite.tsx";
import NotFound from "./pages/NotFound.tsx";
import Orders from "./pages/Orders.tsx";
import Product from "./pages/Product.tsx";
import Profile from "./pages/Profile.tsx";
import Success from "./pages/Success.tsx";
import Layout from "./ui/Layout.tsx";
import Stores from "./pages/Stores.tsx";
import ExchangeProgram from "./pages/ExchangeProgram.tsx";
import Personalization from "./pages/Personalization.tsx";
import Size from "./pages/Size.tsx";
import Lend from "./pages/Lend.tsx";
import AboutUs from "./Foot/AboutUs.tsx";
import Art from "./Foot/Art.tsx";
import BuyPack from "./Foot/BuyPack.tsx";
import Contact from "./Foot/ContactUs.tsx";
import Exchange from "./Foot/Exchange.tsx";
import Faq from "./Foot/Faq.tsx";
import GPR from "./Foot/GPR.tsx";
import KnowUs from "./Foot/KnowUs.tsx";
import Lending from "./Foot/Lending.tsx";
import Personalisation from "./Foot/Persionalisatio.tsx";
import Repair from "./Foot/Repair.tsx";
import Returns from "./Foot/Return.tsx";
import TermsConditions from "./Foot/TermConditions.tsx";
import Blog from "./pages/Blog.tsx";


const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/buyPack",
        element: <BuyPack />,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      {
        path: "/exchange",
        element: <Exchange />,
      },
      {
        path: "/faqs",
        element: <Faq />,
      },
      {
        path: "/gpr",
        element: <GPR />,
      },
      {
        path: "/knowUs",
        element: <KnowUs />,
      },
      {
        path: "/lending",
        element: <Lending />,
      },
      {
        path: "/personalisation",
        element: <Personalisation />,
      },
      {
        path: "/repairs",
        element: <Repair />,
      },
      {
        path: "/returns",
        element: <Returns />,
      },
      {
        path: "/termCondition",
        element: <TermsConditions />,
      },
      
      
      {
        path: "/",
        element: <App />,
      },
      
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/stores",
        element: <Stores />,
      },
      {
        path: "/exchangeProgram",
        element: <ExchangeProgram />,
      },
      {
        path: "/size",
        element: <Size />,
      },
      {
        path: "/lend",
        element: <Lend />,
      },
      {
        path: "/persionalization",
        element: <Personalization />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
