import { useEffect } from 'react';
// Components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Contents
import Dashboard from "../contents/Dashboard";
import Tasks from "../contents/Tasks";

import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";

export default function Main() {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Sidebar />
                <div className="main">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/tasks" element={<Tasks />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );

}
