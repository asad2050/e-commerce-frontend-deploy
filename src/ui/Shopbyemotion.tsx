// import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router-dom";
// import {
//   11,
//   12,
// } from "../assets";
// import {
//   1,
//   2,
// } from "./public/images";

const Shopbyemotion = () => {
  const popularSearchItems = [
    // { title: "Smart Watches", link: "smartWatches" },
    // { title: "Headphone", link: "headphones" },
    // { title: "Cameras", link: "camerasAndPhotos" },
    // { title: "Audio", link: "tvAndAudio" },
    // { title: "Laptop & Computers", link: "computersAndLaptop" },
    // { title: "Cell Phone", link: "cellPhones" },
    { title: "Weddings", link: "smartWatches" },
    { title: "Parents", link: "smartWatches" },
    // { title: "Coples", link: "smartWatches" },
    { title: "Brother", link: "smartWatches" },
    { title: "Love", link: "smartWatches" },
    { title: "Friends", link: "smartWatches" },
    { title: "Family", link: "smartWatches" },
    // { title: "His", link: "smartWatches" },
    
  ];
  return (
    <Container> 
      <div>
      <div className="flex flex-col items-center">
        <Title text="Shop By Emotions" />
        <div className="w-full h-[1px] bg-gray-400 mt-3" />
      </div>
      <div className="my-7 flex items-center flex-wrap gap-20 ml-36">
        {popularSearchItems?.map(({ title, link }) => (
          <Link
            key={title}
            to={`/category/${link}`}
            className="border border-[px] border-gray-300 px-8 py-3 rounded-full capitalize font-medium hover:bg-black bg-slate-200 hover:text-white duration-200"
          >
            {title}
          </Link>
        ))}
      </div>
      </div>
      {/* <div className="w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden"> */}
        {/* <img
          src={1}
          alt="discountedImgOne"
          className="hidden lg:inline-flex h-36"
        /> */}
        {/* <div className="flex flex-col flex-1 gap-1 items-center"> */}
          {/* <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
            <h2>Harmaig Ring</h2>
            <Link
              to={"/product"}
              className="border border-red-600 px-4 py-2 text-xl md:text-3xl text-red-600 rounded-full"
            >
              Discount 20%
            </Link>
          </div> */}
          {/* <p className="text-sm text-gray-600 font-medium">
            Let's go for your dream
          </p> */}
        {/* </div> */}
        {/* <img
          src={2}
          alt="discountedImgTwo"
          className="hidden lg:inline-flex h-36"
        /> */}
      {/* </div> */}
      <div className="mt-20">
      <div className="flex flex-col items-center">
        <Title text="JWELLERY GUIDES" />
        <div className="w-full h-[1px] bg-gray-400 mt-3" />
      </div>
        <div className="ml-10 flex gap-40 items-center">
          <div className=" flex items-center justify-center mb-0 px-0 py-0 cursor-pointer  h-28">
          <Link
              to={"/size"}
              className="border border-slate-200 bg-slate-200 px-60 py-5 text-xl md:text-3xl text-blue-950 rounded-full"
            >
                Size
            </Link>
          </div>
          <div className=" flex items-center justify-center mb-0 px-0 py-0 cursor-pointer group h-28">
          <Link
              to={"/blog"}
              className="border border-slate-200 bg-slate-200 px-60 py-5 text-xl md:text-3xl text-blue-950 rounded-full"
            >
              Blog
            </Link>
          </div>

          {/* <div className="d-grid gap-2 col-6 mx-auto bg-black">
                <CButton className="bg-red-700">Button</CButton>
                <CButton className="bg-red-500 gap-4" >Button</CButton>
            </div> */}

          {/* <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandThree}
              alt="brandThree"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFour}
              alt="brandFour"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div> */}
          {/* <div className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFive}
              alt="brandFive"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandSix}
              alt="brandSix"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div> */}
        </div>
        <div className='place-items-center h-6 mt-0 mb-5 '>
          <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX///8/QD8AAACen575+fnx8fHr6+v8/Py2tra6urr09PTi4uI+Pj7u7u7z8/OZmZmAgIB6enpoaGhtbW3GxsbX19d0dHRPT0+NjY02NjbR0dGpqaklJSW+vr5VVlXd3d1fYWApKSlISEgaGhqQkJCGiIcRExKsra03OTmam5suLi4ZGRlZWlkKDQwfICBPUE8uI+oLAAAEJElEQVR4nO3YaXeiPBgGYAy7AVnDEhaRgjiK+v//3cuiuLXTOdXp6bznvj6FkIbkMeQJFQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcmz3w2f32/1M98+vpuvwE7ksKynFmhmZ81nZ8DJy2kT5qq3Jm5lWUfDs3zQ/xunDjyUKBWaf/uV2W26zhBM5S6gqurH7eVkjDg432d1K8b7Dcpi6mo+vmRf9CM5h7r1oaquUJjL7oKxYq1D9rKUSzK05VPlq8a6zcxiX59Sd3yvajMo5idiryOTiXJmb23rkzbyG7+lvxrb49CktsK6hXsvhFfWWNB7d6Hkk4vjb/9dd9UrsrstubhCT+eutnc7wus8JSbJnZ6vXbcq6144RqXpdL3IxoP24xFPnoff6yEHB/SMC/rS17hb95Nkmn9U2GYvEasy60sFh82XpGUv9mMfyiHEMe/T8P6qhlnonjkvJWqrK+yFlW/iuh5KSnheRWx0r7L0BL/tSVbRfjLqP+aqKumYp56amJC9rl1GxdJzLt9gdYkuFRT3c9EqkqJ5uv+pWlD8u6KOu7NjiuxxN0SsnMW4/VCUV5zLFTvz4HZnsTVk4HvQrGo07YI10Uz/LASE1tCyGHjJFyZQq60YbsvloJE/aSqqqZ/6qJLsV2emstqPzYrqkSNmYJq7Tbe2xQlVV5qUd7Fgxi1P+Zkbq+MvDDC53cWpYrJ/jpVLlwyOGrPhVxJh14lbpPotAxUJnqHfd/5oSxct90Qsg7dVRLM9rlTNboWHaqx5WqcGCNBomtWXaSHwnJjLyVkdSzcIo+HIa6PlX9aIYL2FmrD70jL59LyXAvHALjT/Dk56cY+mxmzLzG6TOFN2XYera8OryZvKqc4lmHuRVVt52Vhp9X07oynEZvEw/yM6SSWpV5Q5kEdVU4bll0pSjI67SzzZtteDm2GRI0vDrwzzHx0XnGmN4XEE79OFo6CpImnUJhWWiZ3b6jiW2HZinzeT6ltT7dLKsz1Wf/8/u0th0olc8Kqm7JEm6Cc2drydpeV/WDnnYefNEsh0eUnRu6dI0KCy/6hDxVG8uSOkguSJFTnK8kP1jvPytiSLpkv2jnZdfG4TI4mblrY9bb/bpGTfuX2q4DvndpLw4hNDVWqBTExAkvnS0qZn9gGOSbTMsuYIAvaR98Df8YUjSECVxuKKph5Wj//+WB3fS6t6xqqRV642W5Ktxb5OxFX+LnWJ8FYkDinj1/H82VTBUcjjmeFnbDrHMm646xSPj12Zqe5LNwm388+0v+Eajl19dWc7i4+b/Mu3a6dV5xV/sJ/egbq10P78DX0HQ8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjf+w97OUE6ocwEEgAAAABJRU5ErkJggg==" alt = "..."/>
        </div>
      </div>
    </Container>
  );
};

export default Shopbyemotion;
