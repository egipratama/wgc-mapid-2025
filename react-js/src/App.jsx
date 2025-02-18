import { Routes, Route } from "react-router-dom";
import Map from "./Pages/Maps";
import Navigator from "./pages/Navigator";
import Marker from "./Pages/Marker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/navigator" element={<Navigator />} />
      <Route path="/marker" element={<Marker />} />
    </Routes>
  );
}

export default App;
