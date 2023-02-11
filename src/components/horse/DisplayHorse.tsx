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
        data-testid="horse-detail"
      >
        <td className="text-xs border-r p-3" data-testid="expand">
          <Icon>{`${expand ? "expand_less" : "expand_more"}`}</Icon>
        </td>
        <td className="border-r p-3" data-testid="start-number">
          {start.number}
        </td>
        <td className="border-r p-3" data-testid="horse-name">
          {start.horse.name}
        </td>
        <td
          className="p-3"
          data-testid="driver-name"
        >{`${start.driver.firstName} ${start.driver.lastName}`}</td>
      </tr>
      {expand && (
        <tr className="border" data-testid="horse-detail-extra">
          <td colSpan={4} className="px-4">
            <table className="text-gray-400">
              <tbody>
                <tr>
                  <td className="p-2">Trainer:</td>
                  <td data-testid="trainer-name">{`${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}</td>
                </tr>
                <tr>
                  <td className="p-2">Owner:</td>
                  <td data-testid="owner-name">{`${start.horse.owner.name} ${start.horse.trainer.lastName}`}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};
