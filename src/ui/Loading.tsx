import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-full bg-white absolute top-0 left-0 flex flex-col gap-1 items-center justify-center">
      <RotatingLines
        visible={true}
        strokeWidth="0.5"
        animationDuration="0.1"
        ariaLabel="rotating-lines-loading"
      />
      {/* <p className="text-white text-2xl font-bold tracking-widest">
        Loading...
      </p> */}
    </div>
  );
};

export default Loading;
