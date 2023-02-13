import { render, screen } from "@testing-library/react";
import moment from "moment";
import { Race } from "../../race/type";
import { ListTracks } from "../ListTracks";
import { Track } from "../type";

describe("<ListTracks />", () => {
  const tracks: Track[] = [
    {
      id: 5,
      name: "Solvalla",
    },
    {
      id: 7,
      name: "Jägersro",
    },
  ];
  const time = "2023-02-15T20:30:00";
  const races: Race[] = [
    {
      id: "2023-02-15_7_6",
      name: "Februaripokalen",
      startTime: "2023-02-15T20:30:00",
      number: 6,
      track: {
        id: 7,
        name: "Jägersro",
      },
      starts: [
        {
          number: 1,
          horse: {
            id: 781969,
            name: "Hooper des Chasses",
            trainer: {
              id: 742262,
              firstName: "Patricia",
              lastName: "van der Meer",
            },
            owner: {
              id: 646842,
              name: "Bornmann Hans Ulrich",
            },
          },
          driver: {
            id: 647387,
            firstName: "Martijn",
            lastName: "de Haan",
          },
        },
      ],
    },
  ];

  it("renders without crash", async () => {
    render(
      <ListTracks tracks={tracks} time={time} races={races} loading={false} />
    );
  });

  it("displays track name and start time", () => {
    render(
      <ListTracks tracks={tracks} time={time} races={races} loading={false} />
    );
    expect(screen.queryAllByTestId("track").length).toEqual(tracks.length);
    expect(screen.queryAllByTestId("track")[0]).toHaveTextContent(
      `${tracks[0].name} - ${moment(time).format("HH:mm")}`
    );
  });

  it("display races", () => {
    render(
      <ListTracks tracks={tracks} time={time} races={races} loading={false} />
    );
    expect(screen.queryAllByTestId("race").length).toEqual(races.length);
  });
});
