import { useEffect, useState } from "react";
// import * as React from "react";
// import React from 'react';
// import { Dropdown } from "rsuite"; 
// import { FaMicroblog } from "react-icons/fa";
// import "rsuite/dist/rsuite.min.css";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  // Transition,
} from "@headlessui/react";
// import { FaChevronDown } from "react-icons/fa";
import {  FiUser } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { logo } from "../assets";
// import {Harmaig1Logo} from "../assets"
// import {Harmaig1Logo} from "../assets/Harmaig1Logo.webp"
// import {Harmaig_logo} from "../assets/Harmaig_logo.jpg"
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../lib";
import { CategoryProps, CollectionProps, DigitalgoldProps, EarringProps, ProductProps, RingProps, WeddingProps } from "../../type";
import ProductCard from "./ProductCard";
import { store } from "../lib/store";
import { IoBagCheck } from "react-icons/io5";
// import Categories from "./Categories";


// const bottomNavigation = [
//   // { title: "Diamond", link: "/product" },
//   // { title: "Earings", link: "/orders" },
//   // { title: "Rings", link: "/ExchangeProgram" },
//   // { title: "Digital Gold", link: "/Persionalization" },
//   { title: "BLOGS", link: "/blog" },
//   // { title: "Wedding", link: "/lend" },
//   // { title: "More", link: "/lend" },
// ];


const Header = () => {

  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [EaringHead, setEaringHead] = useState([]);
  const [RingsHead, setRingsHead] = useState([]);
  const [DigitalGold, setDigitalGold] = useState([]);
  const [Collections, setCollections] = useState([]);
  const [weddings, setweddings] = useState([]);
  // const [more, setmore] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cartProduct, favoriteProduct, currentUser } = store();
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/products`;
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
 

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/earring`;
      try {
        const data = await getData(endpoint);
        setEaringHead(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/ring`;
      try {
        const data = await getData(endpoint);
        setRingsHead(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/digitalgold`;
      try {
        const data = await getData(endpoint);
        setDigitalGold(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/collection`;
      try {
        const data = await getData(endpoint);
        setCollections(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/wedding`;
      try {
        const data = await getData(endpoint);
        setweddings(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const endpoint = `${config?.baseUrl}/more`;
  //     try {
  //       const data = await getData(endpoint);
  //       setmore(data);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);



  useEffect(() => {
    const filtered = products.filter((item: ProductProps) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  return (
    <div className="w-full bg-[#f5dddd] md:sticky md:top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0 mr-20 ">
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="text-bold text-black" >HARMAIG</h1>
          {/* <img src={logo} alt="logo" className="w-40 h-10 " /> */}
          {/* <img src={Harmaig_logo} alt="HarmaigLogo" className="w-44 h-2" /> */}
          </Link>
        {/* SearchBar */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative font-bold text-sm sm:text-xl flex-wrap">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search for Gold Jewellery, Jewellery and more..."
            className="w-full flex-1 rounded-full text-black text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2 bg-zinc-100 flex flex-wrap"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>
        {/* Search product will go here */}
        {searchText && (
          <div className="absolute left-0 top-20 w-full mx-auto max-h-[500px] px-10 py-5 bg-white z-20 overflow-y-scroll text-black shadow-lg shadow-skyText scrollbar-hide">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {filteredProducts?.map((item: ProductProps) => (
                  <ProductCard
                    key={item?._id}
                    item={item}
                    setSearchText={setSearchText}
                  />
                ))}
              </div>
            ) : (
              <div className="py-10 bg-gray-50 w-full flex items-center justify-center border border-gray-600 rounded-md">
                <p className="text-xl font-normal">
                  Nothing matches with your search keywords{" "}
                  <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{`(${searchText})`}</span>
                </p>
                . Please try again
              </div>
            )}
          </div>
        )}

        {/* Menubar */}
        <div className="flex items-center gap-x-6 text-2xl ml-0 mr-0">
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                src={currentUser?.avatar}
                alt="profileImg"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <FiUser className="hover:text-zinc-500 duration-200 cursor-pointer" title="User" />
            )}
          </Link>
          <Link to={"/favorite"} className="relative block">
            <GrFavorite className="hover:text-zinc-500 duration-200 cursor-pointer" title="Favorites" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {favoriteProduct?.length > 0 ? favoriteProduct?.length : "0"}
              
              {/*< FiStar/> */}
            </span>
          </Link>
          <Link to={"/cart"} className="relative block">
            <FaCartPlus className="hover:text-zinc-500 duration-200 cursor-pointer" title="Cart"/>
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {cartProduct?.length > 0 ? cartProduct?.length : "0"}
            </span>
            
            {/* <FiShoppingBag/>  */}
          </Link>

          
          <Link to={"/orders"} className="relative block">
             <IoBagCheck  className="hover:text-zinc-500 duration-200 cursor-pointer h-7 w-7" title="Orders" />
            
          </Link>
          <Link to={"/stores"} className="relative block">
             <IoStorefrontSharp  className="hover:text-zinc-500 duration-200 cursor-pointer" title="Stores"/>
            
          </Link>
          
          

        </div>
      </div>
      <div className="w-full bg-zinc-400 text-whiteText flex flex-wrap">
        <Container className="py-2  flex flex-wrap items-center gap-5 justify-between font-bold text-sm sm:text-xl">
        
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  hover:border-white py-1.5 px-3 font-semibold text-black hover:text-zinc-700">
             All Jewellery
             {/* <FaChevronDown className="text-base mt-1" /> */}
            </MenuButton>
            {/* <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            > */}
              <MenuItems
                anchor="bottom end"
                className="w-80 origin-top-right rounded-xl border border-white/5 bg-slate-50 p-1 text-xl text-black  focus:outline-none hover:text-black z-50 hover:flex flex-col "
              >
                {categories.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      {/* <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      /> */}
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            {/* </Transition> */}
          </Menu>
          
          
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  hover:border-white py-1.5 px-3 font-semibold text-black hover:text-zinc-700">
             Earrings 
            </MenuButton>
            
              <MenuItems
                anchor="bottom end"
                // className="w-52 origin-top-right rounded-xl border border-white/5 bg-slate-800 p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50 "
              className="w-80 origin-top-right rounded-xl border border-white/5 bg-slate-50 p-1 text-xl text-black  focus:outline-none hover:text-black z-50 hover:flex flex-col "
              >
                {EaringHead.map((item: EarringProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      {/* <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      /> */}
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            
          </Menu>
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  hover:border-white py-1.5 px-3 font-semibold text-black hover:text-zinc-700">
             Rings 
            </MenuButton>
            
              <MenuItems
                anchor="bottom end"
               className="w-80 origin-top-right rounded-xl border border-white/5 bg-slate-50 p-1 text-xl text-black  focus:outline-none hover:text-black z-50 hover:flex flex-col "
               >
                {RingsHead.map((item: RingProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      {/* <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      /> */}
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            
          </Menu>
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  hover:border-white py-1.5 px-3 font-semibold text-black hover:text-zinc-700">
             Digital Gold 
            </MenuButton>
            
              <MenuItems
                anchor="bottom end"
              className="w-80 origin-top-right rounded-xl border border-white/5 bg-slate-50 p-1 text-xl text-black  focus:outline-none hover:text-black z-50 hover:flex flex-col "
             >
                {DigitalGold.map((item: DigitalgoldProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      {/* <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      /> */}
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            
          </Menu>
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  hover:border-white py-1.5 px-3 font-semibold text-black hover:text-zinc-700">
             Collections
            </MenuButton>
            
              <MenuItems
                anchor="bottom end"
               className="w-80 origin-top-right rounded-xl border border-white/5 bg-slate-50 p-1 text-xl text-black  focus:outline-none hover:text-black z-50 hover:flex flex-col "
               >
                {Collections.map((item: CollectionProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      {/* <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      /> */}
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            
          </Menu>
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  hover:border-white py-1.5 px-3 font-semibold text-black hover:text-zinc-700">
             Wedding
            </MenuButton>
            
              <MenuItems
                anchor="bottom end"
                className="w-80 origin-top-right rounded-xl border border-white/5 bg-slate-50 p-1 text-xl text-black  focus:outline-none hover:text-black z-50 hover:flex flex-col "
                >
                {weddings.map((item: WeddingProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      {/* <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      /> */}
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
           
          </Menu>
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md  hover:border-white py-1.5 px-3 font-semibold text-black hover:text-zinc-700">
             More
            </MenuButton>
            
              <MenuItems
                anchor="bottom end"
                className="w-80 origin-top-right rounded-xl border border-white/5 bg-slate-50 p-1 text-xl text-black  focus:outline-none hover:text-black z-50 hover:flex flex-col "
                >
                 <ul className="space-y-3 text-1xl">
              <li><Link to="/#" className="hover:text-gray-500">Accessories</Link></li>
              <li><Link to="/#" className="hover:text-gray-500">Care Products</Link></li>
              <li><Link to="/#" className="hover:text-gray-500">Gifts</Link></li>
             
              <li><Link to="/#" className="hover:text-gray-500">Repairs</Link></li>
              <li><Link to="/personalisation" className="hover:text-gray-500">Personalisation</Link></li>
              <li><Link to="/art" className="hover:text-gray-500">Art of Gifting</Link></li>
              <li><Link to="/lending" className="hover:text-gray-500">Lending</Link></li>
              <li><Link to="/gpr" className="hover:text-gray-500">Gold SIP and Reward</Link></li>
              <li><Link to="/returns" className="hover:text-gray-500">30-Day Returns</Link></li>
              <li><Link to="/exchange" className="hover:text-gray-500">Lifetime Exchange</Link></li>
              <li><Link to="/#" className="hover:text-gray-500">Buy Pack</Link></li>
              <li><Link to="/termCondition" className="hover:text-gray-500">Terms & Conditions</Link></li>
            </ul>
              </MenuItems>
            
          </Menu>
          
          
          {/* {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase hidden md:inline-flex  sm:text-xl text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))} */}
        </Container>
      </div>
    </div>
  );
};

export default Header;
