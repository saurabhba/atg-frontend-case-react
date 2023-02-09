import { Race } from "../race/type";
import { Track } from "../track/type";

export interface Bet {
  betType: string;
  results: Array<{ id: string; startTime: string; tracks: Track[] }>;
  upcoming: Array<{ id: string; startTime: string; tracks: Track[] }>;
}

export interface Game {
  id: string;
  races: Race[];
}
