import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import "./App.css";
import View from "./components/viewpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
