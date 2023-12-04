import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Alert from "./components/alert/Alert";
import Particles from "./components/particles/Particles";
import Home from "./pages/home/Home";
import Workshop from "./pages/workshop/Workshop";
import Analysis from "./pages/analysis/Analysis";
import themes from "./_themes.module.scss";
import { useEffect, useState } from "react";

export type Daemon = {
  id: number;
  name: string;
};

export const Daemons: Daemon[] = [
  { id: 0, name: "The Researcher" },
  { id: 1, name: "The Elaborator" },
];

const App = () => {
  const [text, setText] = useState<string>("");
  const [daemon, setDaemon] = useState<Daemon>(Daemons[0]);

  return (
    <>
      <Alert />
      <Particles num={30} radius={6} color={themes["primary_color"]} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/workshop"
            element={
              <Workshop
                text={text}
                setText={setText}
                daemon={daemon}
                setDaemon={setDaemon}
              />
            }
          />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
