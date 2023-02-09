import moment from "moment";
import { FC } from "react";
import { ListHorses } from "../horse";
import { Race } from "./type";

interface DisplayRaceProps {
  race: Race;
}

export const DisplayRace: FC<DisplayRaceProps> = ({ race }) => {
  return (
    <>
      <div className="py-4">
        {race.number} - {race.name} {moment(race.startTime).format("HH:MM")}
      </div>
      <ListHorses starts={race.starts} />
    </>
  );
};
