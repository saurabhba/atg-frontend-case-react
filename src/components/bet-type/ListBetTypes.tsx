import { Tab, Tabs } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BetType } from "./types";

export const ListBetTypes = () => {
  const BET_TYPE_DATA: BetType[] = useMemo(
    () => [
      {
        label: "V75",
        to: "/V75",
      },
      {
        label: "V86",
        to: "/V86",
      },
      {
        label: "GS75",
        to: "/GS75",
      },
    ],
    []
  );

  const [selectedBetType, setSelectedBetType] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const index = BET_TYPE_DATA.findIndex(
      (betType) => betType.to === location.pathname
    );
    if (index > 0) setSelectedBetType(index);
  }, [location.pathname, BET_TYPE_DATA, setSelectedBetType]);

  useEffect(() => {
    if (location.pathname === "/") navigate(BET_TYPE_DATA[selectedBetType].to);
  }, [location.pathname, BET_TYPE_DATA, navigate, selectedBetType]);

  return (
    <>
      <div className="flex justify-start items-center border-b px-3">
        <div className="w-24 text-gray-400 text-sm">Select Bet</div>
        <div>
          <Tabs
            value={selectedBetType}
            onChange={(e, value) => setSelectedBetType(value)}
          >
            {BET_TYPE_DATA.map((betType) => {
              return (
                <Tab
                  label={betType.label}
                  to={betType.to}
                  component={Link}
                  key={betType.label}
                  data-testid="bet-type"
                />
              );
            })}
          </Tabs>
        </div>
      </div>
      <Outlet />
    </>
  );
};
