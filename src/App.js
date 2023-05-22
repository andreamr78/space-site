import { Routes, Route } from "react-router-dom";
import Crew from "./sites/Crew";
import Destination from "./sites/Destination";
import HomePage from "./sites/HomePage";
import Tech from "./sites/Tech";
import "../src/sass/App.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Tech" element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
