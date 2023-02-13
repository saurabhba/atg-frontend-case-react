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
  const [loading, setLoading] = useState(false);

  const active = "bg-purple-700 font-semibold";

  useEffect(() => setIndex(0), [upcoming, results]);

  useEffect(() => {
    setGameIndex(0);
  }, [index]);

  useEffect(() => {
    const fetchGameData = async () => {
      console.log("fetching data");
      try {
        setLoading(true);
        let gameId = "";

        if (index === 0 && upcoming) {
          gameId = upcoming[gameIndex].id;
        } else if (index === 1 && results) {
          gameId = results[gameIndex].id;
        }
        if (gameId !== "") {
          const { data } = await atg.get<Game>(`/games/${gameId}`);
          setGameData(data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, [index, gameIndex, upcoming, results]);

  const renderBet = () => {
    const data = index === 0 ? upcoming : results;

    console.log("data", data);
    console.log("gameData", gameData);

    if (!data) {
      return <div>No data found</div>;
    }

    return (
      <div data-testid={`${index === 0 ? "upcoming" : "result"}`}>
        <div className="flex justify-start items-center border-b pb-3">
          <div className="w-28 text-gray-400 text-sm px-3">Select Date</div>
          <div className="flex-1 md:flex-none flex justify-center items-center md:w-96">
            <button
              className="leading-none border-r border-l border-gray-400 px-3 text-gray-600 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed"
              disabled={gameIndex === 0}
              onClick={() => setGameIndex((index) => index - 1)}
            >
              <Icon>arrow_back_ios_new</Icon>
            </button>

            <div className="flex justify-center items-center font-semibold mx-4">
              {moment(data[gameIndex].startTime).format("dddd DD MMM")}
            </div>
            <button
              className="leading-none border-l border-r border-gray-400 px-3 text-gray-600 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed"
              disabled={gameIndex === data.length - 1}
              onClick={() => setGameIndex((index) => index + 1)}
            >
              <Icon>arrow_forward_ios_new</Icon>
            </button>
          </div>
        </div>
        <ListTracks
          tracks={data[gameIndex].tracks}
          time={data[gameIndex].startTime}
          races={gameData.races}
          loading={loading}
        />
      </div>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center my-4 bg-purple-500 text-white uppercase">
        <button
          className={`flex flex-1 items-center justify-center border-r h-12 ${
            index === 0 ? active : ""
          }`}
          onClick={() => setIndex(0)}
          data-testid="upcoming-button"
        >
          Upcoming
        </button>
        <button
          className={`flex flex-1 items-center justify-center border-r h-12 ${
            index === 1 ? active : ""
          }`}
          onClick={() => setIndex(1)}
          data-testid="result-button"
        >
          Result
        </button>
      </div>
      {renderBet()}
    </>
  );
};
