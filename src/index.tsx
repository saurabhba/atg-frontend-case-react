import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Params,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Header } from "./components/header";
import { ListBetTypes } from "./components/bet-type";
import atg from "./api/atg";
import { DisplayBet } from "./components/bet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Header />}>
      <Route path="/" element={<ListBetTypes />}>
        <Route
          path=":betType"
          element={<DisplayBet />}
          loader={async ({ params }: { params: Params }) => {
            const { data } = await atg.get(`/products/${params.betType}`);
            return data;
          }}
        />
      </Route>
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
