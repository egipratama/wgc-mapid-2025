import { Routes, Route, Link } from "react-router-dom";
import Map from "./Pages/Maps";
import Navigator from "./pages/Navigator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/navigator" element={<Navigator />} />
      </Routes>
    </div>
  );
}

export default App;
