import moment from "moment";
import { FC } from "react";
import { ListHorses } from "../horse";
import { Race } from "./type";

interface DisplayRaceProps {
  race: Race;
}

export const DisplayRace: FC<DisplayRaceProps> = ({ race }) => {
  return (
    <div data-testid="race">
      <div className="pb-2">
        {race.number} - {race.name} {moment(race.startTime).format("HH:MM")}
      </div>
      <div className="pb-6">
        <ListHorses starts={race.starts} />
      </div>
    </div>
  );
};
