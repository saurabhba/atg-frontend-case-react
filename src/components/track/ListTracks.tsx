import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
  Skeleton,
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
  loading: boolean;
}

export const ListTracks: FC<ListTracksProps> = ({
  tracks,
  time,
  races,
  loading,
}) => {
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
              <Typography variant="h5" data-testid="track">
                {track.name} - {moment(time).format("HH:mm")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {loading && (
                <>
                  <Skeleton></Skeleton>
                  <Skeleton></Skeleton>
                  <Skeleton></Skeleton>
                  <Skeleton></Skeleton>
                  <Skeleton></Skeleton>
                  <Skeleton></Skeleton>
                </>
              )}
              {!loading &&
                races &&
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
