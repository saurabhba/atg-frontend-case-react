import { fireEvent, render, screen } from "@testing-library/react";
import { Start } from "../../race/type";
import { DisplayHorse } from "../DisplayHorse";

describe("<DisplayHorse />", () => {
  const start: Start = {
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
  };

  it("renders without crash", () => {
    render(
      <table>
        <tbody>
          <DisplayHorse start={start} />
        </tbody>
      </table>
    );
  });

  it("displays horse details", () => {
    render(
      <table>
        <tbody>
          <DisplayHorse start={start} />
        </tbody>
      </table>
    );
    expect(screen.getByTestId("horse-detail")).toBeInTheDocument();
    expect(screen.getByTestId("start-number")).toHaveTextContent(
      `${start.number}`
    );
    expect(screen.getByTestId("horse-name")).toHaveTextContent(
      `${start.horse.name}`
    );
    expect(screen.getByTestId("driver-name")).toHaveTextContent(
      `${start.driver.firstName} ${start.driver.lastName}`
    );
  });

  it("does not display extra information by default", () => {
    render(
      <table>
        <tbody>
          <DisplayHorse start={start} />
        </tbody>
      </table>
    );
    expect(screen.queryByTestId("horse-detail-extra")).toBeNull();
  });

  it(`display trainer and owner details
    When user clicks on horse details`, () => {
    render(
      <table>
        <tbody>
          <DisplayHorse start={start} />
        </tbody>
      </table>
    );
    fireEvent.click(screen.getByTestId("expand"));
    expect(screen.getByTestId("horse-detail-extra")).toBeInTheDocument();
    expect(screen.getByTestId("trainer-name")).toHaveTextContent(
      `${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`
    );
    expect(screen.getByTestId("owner-name")).toHaveTextContent(
      `${start.horse.owner.name}`
    );
  });
});
