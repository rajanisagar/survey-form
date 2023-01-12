import logo from "./logo.svg";
import "./App.css";
import { ContextProvider } from "./contextApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Completed from "./screens/Completed";
import GeneralFeedBack from "./components/GeneralFeedBack";
import SpecificFeedback from "./components/SpecificFeedback";
import Futher from "./components/Further";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GeneralFeedBack />} />
            <Route path="/SpecificFeedback" element={<SpecificFeedback />} />
            <Route path="/FutherDetails" element={<Futher />} />
            <Route path="/submited" element={<Completed />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
