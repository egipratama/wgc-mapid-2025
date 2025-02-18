import { Routes, Route } from "react-router-dom";
import Map from "./Pages/Maps";
import Navigator from "./pages/Navigator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/navigator" element={<Navigator />} />
    </Routes>
  );
}

export default App;
