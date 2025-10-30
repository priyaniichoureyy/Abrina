import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import RoleForm from "./pages/RoleForm";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/role/:role" element={<RoleForm />} />
        <Route path="/result" element={<ResultPage />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;