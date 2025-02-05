import { useState } from "react";
import "./App.css";
import Login from "./Login";
// import { Dashboard } from "@mui/icons-material";
import { TableComponent } from "./Pages/TableComponent";

import { Dashboard } from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<TableComponent />} />
      </Routes>
    </>
  );
}

export default App;
