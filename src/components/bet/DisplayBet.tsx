import { Icon } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import atg from "../../api/atg";
import { ListTracks } from "../track";
import { Bet, Game } from "./type";

export const DisplayBet = () => {
  const { upcoming, results } = useLoaderData() as Bet;
  const [index, setIndex] = useState(0);
  const [gameIndex, setGameIndex] = useState(0);
  const [gameData, setGameData] = useState({} as Game);

  const active = "bg-purple-700 font-semibold";

  useEffect(() => setIndex(0), [upcoming, results]);

  useEffect(() => {
    setGameIndex(0);
  }, [index]);

  useEffect(() => {
    const fetchGameData = async () => {
      const gameId =
        index === 0 ? upcoming[gameIndex].id : results[gameIndex].id;

      const { data } = await atg.get<Game>(`/games/${gameId}`);
      setGameData(data);
    };

    fetchGameData();
  }, [index, gameIndex]);

  const renderBet = () => {
    const data = index === 0 ? upcoming : results;

    if (!data) {
      return <div>No data found</div>;
    }

    return (
      <>
        <div className="flex justify-start items-center">
          <div className="w-24 text-gray-400 text-sm">Select Date</div>
          <div className="flex-1 md:flex-none flex justify-center items-center md:w-96">
            <button
              className="leading-none border-r border-l border-gray-400 px-3 text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
              disabled={gameIndex === 0}
              onClick={() => setGameIndex((index) => index - 1)}
            >
              <Icon>arrow_back_ios_new</Icon>
            </button>

            <div className="flex justify-center items-center font-semibold mx-4">
              {moment(data[gameIndex].startTime).format("dddd DD MMM")}
            </div>
            <button
              className="leading-none border-l border-r border-gray-400 px-3 text-gray-600 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed"
              disabled={gameIndex === data.length - 1}
              onClick={() => setGameIndex((index) => index + 1)}
            >
              <Icon>arrow_forward_ios_new</Icon>
            </button>
          </div>
        </div>
        <ListTracks
          tracks={data[gameIndex].tracks}
          time={moment(data[gameIndex].startTime).format("HH:mm")}
          races={gameData.races}
        />
      </>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center my-4 bg-purple-500 text-white uppercase">
        <div
          className={`flex flex-1 items-center justify-center border-r h-12 ${
            index === 0 ? active : ""
          }`}
          onClick={() => setIndex(0)}
        >
          Upcoming
        </div>
        <div
          className={`flex flex-1 items-center justify-center border-r h-12 ${
            index === 1 ? active : ""
          }`}
          onClick={() => setIndex(1)}
        >
          Result
        </div>
      </div>
      {renderBet()}
    </>
  );
};
