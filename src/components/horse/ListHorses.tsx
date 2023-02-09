import { Icon } from "@mui/material";
import { FC } from "react";
import { Start } from "../race/type";
import { DisplayHorse } from "./DisplayHorse";

interface ListHorsesProps {
  starts: Start[];
}
export const ListHorses: FC<ListHorsesProps> = ({ starts }) => {
  return (
    <table className="table-fixed min-w-full">
      <thead>
        <tr>
          <th className="w-10"></th>
          <th className="w-16"></th>
          <th>Horse</th>
          <th>Driver</th>
        </tr>
      </thead>
      <tbody>
        {starts.map((start) => {
          return <DisplayHorse start={start} key={start.number} />;
        })}
      </tbody>
    </table>
  );
};
