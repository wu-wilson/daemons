import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Alert from "./components/alert/Alert";
import Particles from "./components/particles/Particles";
import Home from "./pages/home/Home";
import Workshop from "./pages/workshop/Workshop";
import themes from "./_themes.module.scss";

const App = () => {
  return (
    <>
      <Alert />
      <Particles num={30} radius={6} color={themes["primary_color"]} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
