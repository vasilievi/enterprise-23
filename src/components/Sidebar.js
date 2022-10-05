import { useEffect } from 'react';
import * as Icon from 'react-feather';

import {
    Link,
} from "react-router-dom";

export default function Sidebar() {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    function checkSidebar() {
        console.log('checkSidebar');
        let sidebar = document.getElementById("sidebar")
        if (document.documentElement.clientWidth < 1000) {
            sidebar.classList.toggle("collapsed")
        }
    }

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">Enterprise</span>
                </a>

                <ul className="sidebar-nav">

                    <li className="sidebar-header">
                        User
                    </li>

                    <li className="sidebar-item">
                        <Link className="sidebar-link" to="/profile" onClick={checkSidebar}>
                            <Icon.User className="align-middle" /> <span className="align-middle">Dashboard</span>
                            <span className="sidebar-badge badge bg-primary">2</span>
                        </Link>

                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="pages-sign-in.html">
                            <Icon.LogIn className="align-middle" /> <span className="align-middle">Sign In</span>
                        </a>
                    </li>

                    <li className="sidebar-header">
                        Tasks
                    </li>

                    <li className="sidebar-item active">
                        <Link className="sidebar-link" to="/" onClick={checkSidebar}>
                            <Icon.Sliders className="align-middle" /> <span className="align-middle">Dashboard</span>
                            <span className="sidebar-badge badge bg-primary">2</span>
                        </Link>
                    </li>

                    <li className="sidebar-item active">
                        <Link className="sidebar-link" to="/tasks" onClick={checkSidebar}>
                            <Icon.List className="align-middle" /> <span className="align-middle">Tasks</span>
                            <span className="sidebar-badge badge bg-primary">2</span>
                        </Link>
                    </li>

                    <li className="sidebar-header">
                        Admin
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-forms.html">
                            <Icon.CheckSquare className="align-middle" /> <span
                                className="align-middle">Forms</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-cards.html">
                            <Icon.Grid className="align-middle" /> <span className="align-middle">Cards</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-typography.html">
                            <Icon.AlignLeft className="align-middle" /> <span
                                className="align-middle">Typography</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="icons-feather.html">
                            <Icon.Coffee className="align-middle" /><span className="align-middle">Icons</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="charts-chartjs.html">
                            <Icon.BarChart2 className="align-middle" /><span
                                className="align-middle">Charts</span>
                        </a>
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="maps-google.html">
                            <Icon.Map className="align-middle" /><span className="align-middle">Maps</span>
                        </a>
                    </li>
                </ul>

                <div className="sidebar-cta">
                    <div className="sidebar-cta-content">
                        <strong className="d-inline-block mb-2">Android</strong>
                        <div className="mb-3 text-sm">
                            Try our mobile application.
                        </div>
                        <div className="d-grid">
                            <a href="https://play.google.com/store/apps/details?id=ru.pcs.enterprise" className="btn btn-primary">Install</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );

}