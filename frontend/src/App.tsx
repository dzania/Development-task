import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { ReportPage } from "./pages/ReportPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<UserPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
