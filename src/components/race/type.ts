import { Horse, Person } from "../horse/type";
import { Track } from "../track/type";

export interface Race {
  id: string;
  name: string;
  number: number;
  starts: Start[];
  track: Track;
  startTime: string;
}

export interface Start {
  number: number;
  driver: Person;
  horse: Horse;
}
