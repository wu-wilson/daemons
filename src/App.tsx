import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Alert from "./components/alert/Alert";
import Particles from "./components/particles/Particles";
import Home from "./pages/home/Home";
import Workshop from "./pages/workshop/Workshop";
import Analysis from "./pages/analysis/Analysis";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import themes from "./_themes.module.scss";
import { useState } from "react";

export type Daemon = {
  id: number;
  name: string;
  description: string;
};

export const Daemons: Daemon[] = [
  {
    id: 0,
    name: "The Researcher",
    description:
      "The Researcher is obsessed with evidence. If a sentence needs more evidence, The Researcher will point it out and help you find stats or sources. As such, this Daemon is best used for writing that is argumentative.",
  },
  {
    id: 1,
    name: "The Elaborator",
    description:
      "The Elaborator loves clarity. If a sentence is not adequately explained, The Elaborator will reword it to ensure every nuance is crystal clear. As such, this Daemon is best used for writing that attempts to explain something.",
  },
  {
    id: 2,
    name: "The Grammarist",
    description:
      "The Grammarist is super observant. If there's a grammatical error, The Grammarist will find and fix it. This Daemon is best used for writing that needs to be proofread.",
  },
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
          <Route
            path="/analysis"
            element={<Analysis text={text} daemon={daemon} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
