import { Icon } from "@mui/material";
import { FC, useState } from "react";
import { Start } from "../race/type";

interface DisplayHorseProps {
  start: Start;
}

export const DisplayHorse: FC<DisplayHorseProps> = ({ start }) => {
  const [expand, setExapnd] = useState(false);

  return (
    <>
      <tr
        className="border hover:bg-gray-100 hover:cursor-pointer"
        key={start.number}
        onClick={() => setExapnd(!expand)}
      >
        <td className="text-xs border-r p-3">
          <Icon>{`${expand ? "expand_less" : "expand_more"}`}</Icon>
        </td>
        <td className="border-r p-3">{start.number}</td>
        <td className="border-r p-3">{start.horse.name}</td>
        <td className="p-3">{`${start.driver.firstName} ${start.driver.lastName}`}</td>
      </tr>
      {expand && (
        <tr className="border">
          <td colSpan={4} className="px-4">
            <table className="text-gray-400">
              <tbody>
                <tr>
                  <td className="p-2">Trainer:</td>
                  <td>{`${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}</td>
                </tr>
                <tr>
                  <td className="p-2">Owner:</td>
                  <td>{`${start.horse.owner.name} ${start.horse.trainer.lastName}`}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};
