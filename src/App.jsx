import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arrays from "./components/Arrays";

function App() {
  return (
    <BrowserRouter>
      <div className="p-5">
        <h1 className="p-4 text-blue-700 text-4xl text-center">
          Learn JS data methods
        </h1>
        <Navbar />
        <Routes>
          <Route path="/arrays" element={<Arrays />} />
          {/* <Route path="/strings" />
          <Route path="/arrays" />
          <Route path="/objects" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
