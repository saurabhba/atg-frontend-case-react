import "react-router-dom";
import {
  cleanup,
  findByText,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { DisplayBet } from "../DisplayBet";
import atg from "../../../api/atg";
import { act } from "react-dom/test-utils";

jest.mock("../../../api/atg");

const data = {
  "@type": ".Game",
  id: "V86_2023-02-15_40_1",
  status: "bettable",
  races: [
    {
      id: "2023-02-15_7_6",
      name: "Februaripokalen",
      date: "2023-02-15",
      number: 6,
      distance: 2140,
      startMethod: "auto",
      startTime: "2023-02-15T20:30:00",
      scheduledStartTime: "2023-02-15T20:30:00",
      prize:
        "Pris: 50.000-25.000-13.000-10.000-7.500-(5.500)-(3.500) kr. Lägst 1.500 kr till alla tävlande.",
      terms: [
        "3-åriga och äldre lägst 395.001 kr. Körsvenskrav kat. 2. Körsvenner födda 050215 eller tidigare.",
        "Hederspris till segrande hästs ägare och hästskötare.",
        "2140 m. Autostart. 12 startande.",
      ],
      sport: "trot",
      track: {
        id: 7,
        name: "Jägersro",
        countryCode: "SE",
      },
      status: "upcoming",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2023-02-15_7_6",
          status: "bettable",
          timestamp: "2023-02-11 21:18:16",
          turnover: 3000,
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2023-02-15_7_6",
          status: "bettable",
          timestamp: "2023-02-11 21:18:16",
          turnover: 3000,
        },
      },
      starts: [
        {
          number: 1,
          postPosition: 1,
          distance: 2140,
          horse: {
            id: 781969,
            name: "Hooper des Chasses",
            nationality: "FR",
            age: 6,
            sex: "gelding",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 4,
              },
            },
            trainer: {
              id: 742262,
              firstName: "Patricia",
              lastName: "van der Meer",
              shortName: "Der Pa",
              location: "Sjöbo",
              birth: 1978,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Mörkblå, ljusblått axelskärp; mblå",
              statistics: {
                years: {
                  "2022": {
                    starts: 108,
                    earnings: 149649800,
                    placement: {
                      "1": 16,
                      "2": 12,
                      "3": 7,
                    },
                    winPercentage: 1481,
                  },
                  "2023": {
                    starts: 15,
                    earnings: 11940000,
                    placement: {
                      "1": 0,
                      "2": 2,
                      "3": 1,
                    },
                    winPercentage: 0,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1170474,
            color: "brun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 646842,
              name: "Bornmann Hans Ulrich",
              location: "Tyskland",
            },
            breeder: {
              id: 822869,
              name: "Goossens Ronald",
              location: "Frankrike",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 16,
                  earnings: 45711700,
                  placement: {
                    "1": 4,
                    "2": 0,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 4,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 6,
                      },
                      place: 0,
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 3500000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 9,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 50,
                earnings: 117047400,
                placement: {
                  "1": 15,
                  "2": 5,
                  "3": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 6,
                    },
                    place: 7,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2021",
                  },
                ],
                winPercentage: 3000,
                placePercentage: 5000,
                earningsPerStart: 2340948,
                startPoints: 632,
              },
              lastFiveStarts: {
                averageOdds: 1293,
              },
            },
            pedigree: {
              father: {
                id: 684918,
                name: "Quaker Jet",
                nationality: "FR",
              },
              mother: {
                id: 781968,
                name: "Sonate du Chene",
                nationality: "FR",
              },
              grandfather: {
                id: 509945,
                name: "Horsy",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 647387,
            firstName: "Martijn",
            lastName: "de Haan",
            shortName: "Haa Ma",
            location: "Sjöbo",
            birth: 1978,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Grön, gult mönster;",
            statistics: {
              years: {
                "2022": {
                  starts: 63,
                  earnings: 59094600,
                  placement: {
                    "1": 8,
                    "2": 4,
                    "3": 6,
                  },
                  winPercentage: 1269,
                },
                "2023": {
                  starts: 13,
                  earnings: 9340000,
                  placement: {
                    "1": 0,
                    "2": 2,
                    "3": 0,
                  },
                  winPercentage: 0,
                },
              },
            },
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 9999,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 594,
              maxOdds: 594,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 328,
            },
          },
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
  ],
  version: 1676152099959,
};

const result_data = {
  "@type": ".Game",
  id: "V86_2023-02-08_40_1",
  status: "results",
  races: [
    {
      id: "2023-02-08_78_6",
      date: "2023-02-08",
      number: 6,
      distance: 2100,
      startMethod: "auto",
      startTime: "2023-02-08T20:30:59",
      scheduledStartTime: "2023-02-08T20:30:00",
      prize: "30.000-15.000-9.000-6.000-4.500-(3.000) NOK",
      terms: ["3-14-åriga högst 125.000 NOK."],
      sport: "trot",
      track: {
        id: 78,
        name: "Bjerke",
        countryCode: "NO",
      },
      result: {
        scratchings: [1],
      },
      status: "results",
      mediaId: "1283020357052",
      starts: [
        {
          number: 1,
          scratched: true,
          postPosition: 1,
          distance: 2100,
          horse: {
            name: "I.D. Forcedtovictory",
            nationality: "NO",
            age: 4,
            sex: "stallion",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 9,
              },
            },
            trainer: {
              firstName: "Frode",
              lastName: "Hamre",
              shortName: "Ham Fr",
              license: "Okänd",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 188064,
            color: "svart",
            owner: {
              name: "Heidi Munkhaugen Selvaag-Alv Erik Selvaag",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 7,
                  earnings: 10424000,
                  placement: {
                    "1": 2,
                    "2": 3,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 9,
                      },
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 2,
                      },
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 8382400,
                  placement: {
                    "1": 2,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 9,
                      },
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 8,
                      },
                    },
                  ],
                },
              },
              life: {
                starts: 9,
                earnings: 18806400,
                placement: {
                  "1": 4,
                  "2": 3,
                  "3": 1,
                },
                records: [],
                winPercentage: 4444,
                placePercentage: 8888,
                earningsPerStart: 2089600,
                startPoints: 0,
              },
              lastFiveStarts: {
                averageOdds: 180,
              },
            },
            pedigree: {
              father: {
                name: "Maharajah",
              },
              mother: {
                name: "Georgia Pines",
                nationality: "US",
              },
              grandfather: {
                name: "Pine Chip",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 0,
            firstName: "Tom Erik",
            lastName: "Solberg",
            shortName: "Sol To",
            license: "Okänd",
            silks: "Svart,med reklame.",
            statistics: {
              years: {
                "2023": {
                  starts: 49,
                  earnings: 45841200,
                  placement: {
                    "1": 8,
                    "2": 4,
                    "3": 7,
                  },
                  winPercentage: 1632,
                },
              },
            },
          },
          result: {
            finalOdds: 0,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V86: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 79,
            },
          },
        },
      ],
    },
  ],
  currentVersion: 1676203758203,
};

const betData = {
  betType: "V86",
  upcoming: [
    {
      id: "V86_2023-02-15_40_1",
      startTime: "2023-02-15T20:30:00",
      tracks: [
        {
          id: 5,
          name: "Solvalla",
        },
        {
          id: 7,
          name: "Jägersro",
        },
      ],
      races: [
        {
          id: "2023-02-15_7_6",
          starts: [
            {
              number: 1,
              horse: {
                name: "Hooper des Chasses",
              },
            },
          ],
        },
      ],
    },
  ],
  results: [
    {
      id: "V86_2023-02-08_40_1",
      tracks: [
        {
          id: 5,
          name: "Solvalla",
        },
        {
          id: 78,
          name: "Bjerke",
        },
      ],
      totalToWin: 1617529500,
      startTime: "2023-02-08T20:30:59",
    },
  ],
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: () => betData,
}));

describe("<DisplayBet />", () => {
  beforeEach(() => {
    jest.spyOn(atg, "get").mockResolvedValue({ data });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("renders without crash", async () => {
    await act(() => render(<DisplayBet />));
  });

  it("has active upcoming button", async () => {
    await act(() => render(<DisplayBet />));
    expect(screen.getByTestId("upcoming")).toBeInTheDocument();
    expect(screen.queryByTestId("result")).not.toBeInTheDocument();
    expect(atg.get).toHaveBeenCalledTimes(1);
  });

  it(`displays result
      When user clicks on result button`, async () => {
    await act(() => render(<DisplayBet />));
    fireEvent.click(screen.getByTestId("result-button"));

    expect(atg.get).toHaveBeenCalledTimes(2);
    expect(atg.get).toHaveBeenCalledWith(`/games/${betData.results[0].id}`);
  });
});
