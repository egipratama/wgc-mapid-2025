import { Routes, Route } from "react-router-dom";
import Map from "./Pages/Maps";
import Navigator from "./pages/Navigator";
import Marker from "./Pages/Marker";
import Points from "./Pages/Points";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/navigator" element={<Navigator />} />
      <Route path="/marker" element={<Marker />} />
      <Route path="/points" element={<Points />} />
    </Routes>
  );
}

export default App;
