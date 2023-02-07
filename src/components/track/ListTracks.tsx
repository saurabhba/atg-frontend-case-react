import { Tabs } from "@mui/material";

export const ListTracks = () => {
  return (
    <div className="flex justify-start items-center border-b">
      <div className="w-24 text-gray-400 text-sm">Select Track</div>
      <Tabs></Tabs>
    </div>
  );
};
