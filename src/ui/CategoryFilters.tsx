import  { useEffect, useState } from "react";
import { config } from "../../config";
import { getData } from "../lib";
import { RotatingLines } from "react-loader-spinner";
import { CategoryProps } from "../../type";
import { Link } from "react-router-dom";
// import {
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   // Transition,
// } from "@headlessui/react";

const CategoryFilters = ({ id }: { id: string | undefined }) => {
  const [categories, setCategories] = useState([]);
  //  const [RingsHead, setRingsHead] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const endpoint = `${config?.baseUrl}/ring`;
  //     try {
  //       setLoading(true);
  //       const data = await getData(endpoint);
  //       setRingsHead(data);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="hidden md:inline-flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <div>
        {/* <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2">
          Select Categories
        </p> */}
        <div className="flex flex-col gap-y-2 min-w-40">
          {loading ? (
            <div className="flex items-center justify-center my-5">
              <RotatingLines
                visible={true}
                strokeWidth="0.5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                width="50"
              />
            </div>
          ) : 
          (
            categories?.map((item: CategoryProps) => (
              <Link
                to={`/category/${item?._base}`}
                key={item?._id}
                className={`text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
                  item?._base === id
                    ? "text-greenText decoration-greenText"
                    : "text-lightText"
                }`}
              >
                {item?.name}
              </Link>
            ))
          )
          // (
          //   RingsHead?.map((item:RingProps) => (
          //     <Link
          //       to={`/category/${item?._base}`}
          //       key={item?._id}
          //       className={`text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
          //         item?._base === id
          //           ? "text-greenText decoration-greenText"
          //           : "text-lightText"
          //       }`}
          //     >
          //       {item?.name}
          //     </Link>
          //   ))
          // )
          // <div>
          //   <ul>
          //     <li>
          //     <Menu>
              
          //     <MenuButton className="inline-flex items-center gap-2 rounded-md   py-1.5 px-3 font-semibold text-zinc-700 hover:text-black">
          //       Price 
          //      </MenuButton>
          //      <MenuItems
          //       // anchor="bottom end"
          //      className="w-50 origin-top-right rounded-xl border border-white/5 p-1 text-xl text-zinc-600  focus:outline-none hover:text-black z-50 hover:flex flex-col "
          //      >
          //       {RingsHead.map((item: RingProps) => (
          //         <MenuItem key={item?._id}>
          //           <Link
          //             to={`/category/${item?._base}`}
          //             className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
          //           >
                      
          //             {item?.name}
          //           </Link>
                    
          //         </MenuItem>
          //       ))}
          //      </MenuItems>
          //     </Menu>
          //     </li>

          //    <li>
          //   <Menu>
             
          //    <MenuButton className="inline-flex items-center gap-2 rounded-md   py-1.5 px-3 font-semibold text-zinc-700 hover:text-black">
          //       Ocassion
          //     </MenuButton>
            
          //    <MenuItems
          //       // anchor="bottom end"
          //      className="w-50 origin-top-right rounded-xl border border-white/5 p-1 text-xl text-zinc-600  focus:outline-none hover:text-black z-50 hover:flex flex-col "
          //      >
          //       {categories.map((item: CategoryProps) => (
          //         <MenuItem key={item?._id}>
          //           <Link
          //             to={`/category/${item?._base}`}
          //             className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
          //           >
                      
          //             {item?.name}
          //           </Link>
                    
          //         </MenuItem>
          //       ))}
          //     </MenuItems>
          //   </Menu> 
          //   </li>
          //   <li>
          //   <Menu>
              
          //     <MenuButton className="inline-flex items-center gap-2 rounded-md   py-1.5 px-3 font-semibold text-zinc-700 hover:text-black">
          //       Purity 
          //      </MenuButton>
          //      <MenuItems
          //       // anchor="bottom end"
          //      className="w-50 origin-top-right rounded-xl border border-white/5 p-1 text-xl text-zinc-600  focus:outline-none hover:text-black z-50 hover:flex flex-col "
          //      >
          //       {RingsHead.map((item: RingProps) => (
          //         <MenuItem key={item?._id}>
          //           <Link
          //             to={`/category/${item?._base}`}
          //             className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
          //           >
                      
          //             {item?.name}
          //           </Link>
                    
          //         </MenuItem>
          //       ))}
          //      </MenuItems>
          //     </Menu>
          //     </li>
          //     </ul> 
          //   </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
