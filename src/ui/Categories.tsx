import  { useEffect, useState } from "react";
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../lib";
import Title from "./Title";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../type";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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
  return (
    <Container className="bg-white">
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Shop By Category" />
          <Link
            to={"/category/tvAndAudio"}
            className="font-medium relative group overflow-hidden"
          >
            View All Categories{" "}
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-500 mt-3" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((item: CategoryProps) => (
          <Link
            to={`/category/${item?._base}`}
            key={item?._id}
            className="w-full h-auto relative group overflow-hidden"
          >
            <img
              src={item?.image}
              alt="categoryImage"
              className="w-full h-auto rounded-md group-hover:scale-110 duration-300 bg-slate-100"
            />
            <div className="absolute bottom-3 w-full text-center bg-slate-100">
              <p className="text-sm md:text-base font-bold">{item?.name}</p>
            </div>
          </Link>
        ))}
        
      </div>
      <div className='place-items-center h-20 mt-0 mb-0  '>
          <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEX///8/QD8AAACen575+fnx8fHr6+v8/Py2tra6urr09PTi4uI+Pj7u7u7z8/OZmZmAgIB6enpoaGhtbW3GxsbX19d0dHRPT0+NjY02NjbR0dGpqaklJSW+vr5VVlXd3d1fYWApKSlISEgaGhqQkJCGiIcRExKsra03OTmam5suLi4ZGRlZWlkKDQwfICBPUE8uI+oLAAAEJElEQVR4nO3YaXeiPBgGYAy7AVnDEhaRgjiK+v//3cuiuLXTOdXp6bznvj6FkIbkMeQJFQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcmz3w2f32/1M98+vpuvwE7ksKynFmhmZ81nZ8DJy2kT5qq3Jm5lWUfDs3zQ/xunDjyUKBWaf/uV2W26zhBM5S6gqurH7eVkjDg432d1K8b7Dcpi6mo+vmRf9CM5h7r1oaquUJjL7oKxYq1D9rKUSzK05VPlq8a6zcxiX59Sd3yvajMo5idiryOTiXJmb23rkzbyG7+lvxrb49CktsK6hXsvhFfWWNB7d6Hkk4vjb/9dd9UrsrstubhCT+eutnc7wus8JSbJnZ6vXbcq6144RqXpdL3IxoP24xFPnoff6yEHB/SMC/rS17hb95Nkmn9U2GYvEasy60sFh82XpGUv9mMfyiHEMe/T8P6qhlnonjkvJWqrK+yFlW/iuh5KSnheRWx0r7L0BL/tSVbRfjLqP+aqKumYp56amJC9rl1GxdJzLt9gdYkuFRT3c9EqkqJ5uv+pWlD8u6KOu7NjiuxxN0SsnMW4/VCUV5zLFTvz4HZnsTVk4HvQrGo07YI10Uz/LASE1tCyGHjJFyZQq60YbsvloJE/aSqqqZ/6qJLsV2emstqPzYrqkSNmYJq7Tbe2xQlVV5qUd7Fgxi1P+Zkbq+MvDDC53cWpYrJ/jpVLlwyOGrPhVxJh14lbpPotAxUJnqHfd/5oSxct90Qsg7dVRLM9rlTNboWHaqx5WqcGCNBomtWXaSHwnJjLyVkdSzcIo+HIa6PlX9aIYL2FmrD70jL59LyXAvHALjT/Dk56cY+mxmzLzG6TOFN2XYera8OryZvKqc4lmHuRVVt52Vhp9X07oynEZvEw/yM6SSWpV5Q5kEdVU4bll0pSjI67SzzZtteDm2GRI0vDrwzzHx0XnGmN4XEE79OFo6CpImnUJhWWiZ3b6jiW2HZinzeT6ltT7dLKsz1Wf/8/u0th0olc8Kqm7JEm6Cc2drydpeV/WDnnYefNEsh0eUnRu6dI0KCy/6hDxVG8uSOkguSJFTnK8kP1jvPytiSLpkv2jnZdfG4TI4mblrY9bb/bpGTfuX2q4DvndpLw4hNDVWqBTExAkvnS0qZn9gGOSbTMsuYIAvaR98Df8YUjSECVxuKKph5Wj//+WB3fS6t6xqqRV642W5Ktxb5OxFX+LnWJ8FYkDinj1/H82VTBUcjjmeFnbDrHMm646xSPj12Zqe5LNwm388+0v+Eajl19dWc7i4+b/Mu3a6dV5xV/sJ/egbq10P78DX0HQ8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjf+w97OUE6ocwEEgAAAABJRU5ErkJggg==" alt = "..."/>
        </div>
    </Container>
  );
};

export default Categories;
