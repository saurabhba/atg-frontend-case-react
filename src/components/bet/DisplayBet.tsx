import { useLoaderData } from "react-router-dom";

export const DisplayBet = () => {
  const data = useLoaderData();
  return (
    <div className="flex items-center justify-center my-4 bg-purple-600 h-12 text-white">
      <div className="flex flex-1 items-center justify-center border-r">
        Upcoming
      </div>
      <div className="flex flex-1 items-center justify-center">Result</div>
    </div>
  );
};
