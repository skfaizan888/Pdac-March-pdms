import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { AddPatient } from "./components/AddPatient";
import { EditPatient } from "./components/EditPatient";
import "./components/common.css";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddPatient />} />
          <Route path="/edit" element={<EditPatient />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
