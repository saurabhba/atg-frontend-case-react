import { render, screen } from "@testing-library/react";
import moment from "moment";
import { DisplayRace } from "../DisplayRace";
import { Race } from "../type";

describe("<DisplayRace />", () => {
  const race: Race = {
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
  };

  it("renders without crash", () => {
    render(<DisplayRace race={race} />);
  });

  it("displays race details", () => {
    render(<DisplayRace race={race} />);
    expect(screen.getByTestId("race")).toBeInTheDocument();
    expect(screen.getByTestId("race")).toHaveTextContent(
      `${race.number} - ${race.name} ${moment(race.startTime).format("HH:MM")}`
    );
  });

  it("display horses", () => {
    render(<DisplayRace race={race} />);
    expect(
      screen
        .getByTestId("race")
        .querySelectorAll("table>tbody>tr[data-testid='horse-detail']").length
    ).toEqual(race.starts.length);
  });
});
