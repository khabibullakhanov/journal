import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home/Home'
import { AddStudents } from "./Pages/AddStudents/AddStudents";
import { Schedule } from "./Pages/Schedule/Schedule";
import { Students } from "./Pages/Students/Students";

export function Routers() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addStudents" element={<AddStudents />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/students" element={<Students />} />
                </Routes>
            </Router>
        </div>
    )
}
