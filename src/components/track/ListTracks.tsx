import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
  Tabs,
  Typography,
} from "@mui/material";
import moment from "moment";
import { FC } from "react";
import { DisplayRace } from "../race";
import { Race } from "../race/type";
import { Track } from "./type";

interface ListTracksProps {
  tracks: Track[];
  time: string;
  races: Race[];
}

export const ListTracks: FC<ListTracksProps> = ({ tracks, time, races }) => {
  return (
    <>
      {tracks.map((track) => {
        return (
          <Accordion key={track.id}>
            <AccordionSummary
              expandIcon={<Icon>expand_more</Icon>}
              aria-controls={`panel-header-${track.id}`}
              id={`panel-header-${track.id}`}
            >
              <Typography variant="h5">
                {track.name} - {time}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {races &&
                races
                  .filter((race) => race.track.id === track.id)
                  .map((race) => {
                    return <DisplayRace race={race} key={race.id} />;
                  })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
