import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { ContextProvider } from "./contextApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Completed from "./screens/Completed";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submited" element={<Completed />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
