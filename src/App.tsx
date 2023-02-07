import "./App.css";
import { Outlet, Params, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ListBetTypes } from "./components/bet-type/ListBetTypes";
import atg from "./api/atg";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<ListBetTypes />}>
          <Route
            path="/:betType"
            element={<h2>About</h2>}
            loader={({ params }: { params: Params }) => {
              console.log(params["*"]);
              return "Test";
            }}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
