import { getByTestId, render, screen } from "@testing-library/react";
import { Start } from "../../race/type";
import { ListHorses } from "../ListHorses";

describe("<ListHorses />", () => {
  const starts: Start[] = [
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
  ];

  it("renders without crash", () => {
    render(<ListHorses starts={starts} />);
  });

  it("displays horses", () => {
    render(<ListHorses starts={starts} />);
    expect(
      screen.getByTestId("list-horses").querySelectorAll("tbody>tr").length
    ).toEqual(starts.length);
  });
});
