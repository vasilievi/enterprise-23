import { useEffect } from 'react';
import * as Icon from 'react-feather';

export default function App() {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle">AdminKit</span>
                    </a>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>

                        <li className="sidebar-item active">
                            <a className="sidebar-link" href="index.html">
                                <Icon.Sliders class="align-middle" /> <span
                                    className="align-middle">Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link" href="pages-tasks.html">
                                <Icon.List class="align-middle" /> <span className="align-middle">Tasks</span>
                                <span className="sidebar-badge badge bg-primary">Pro</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-profile.html">
                                <Icon.User class="align-middle" /> <span className="align-middle">Profile</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-sign-in.html">
                                <Icon.LogIn class="align-middle" /> <span className="align-middle">Sign In</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-sign-up.html">
                                <Icon.UserPlus class="align-middle" /> <span className="align-middle">Sign
                                    Up</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-blank.html">
                                <Icon.Book class="align-middle" /> <span className="align-middle">Blank</span>
                            </a>
                        </li>

                        <li className="sidebar-header">
                            Tools & Components
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-buttons.html">
                                <Icon.Square class="align-middle" /> <span className="align-middle">Buttons</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-forms.html">
                                <Icon.CheckSquare class="align-middle" /> <span
                                    className="align-middle">Forms</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-cards.html">
                                <Icon.Grid class="align-middle" /> <span className="align-middle">Cards</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="ui-typography.html">
                                <Icon.AlignLeft class="align-middle" /> <span
                                    className="align-middle">Typography</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="icons-feather.html">
                                <Icon.Coffee class="align-middle" /><span className="align-middle">Icons</span>
                            </a>
                        </li>

                        <li className="sidebar-header">
                            Plugins & Addons
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="charts-chartjs.html">
                                <Icon.BarChart2 class="align-middle" /><span
                                    className="align-middle">Charts</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="maps-google.html">
                                <Icon.Map class="align-middle" /><span className="align-middle">Maps</span>
                            </a>
                        </li>
                    </ul>

                    <div className="sidebar-cta">
                        <div className="sidebar-cta-content">
                            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
                            <div className="mb-3 text-sm">
                                Are you looking for more components? Check out our premium version.
                            </div>
                            <div className="d-grid">
                                <a href="upgrade-to-pro.html" className="btn btn-primary">Upgrade to Pro</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center"></i>
                    </a>

                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav navbar-align">
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <Icon.Bell />
                                        <span className="indicator">4</span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                                    aria-labelledby="alertsDropdown">
                                    <div className="dropdown-menu-header">
                                        4 New Notifications
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <Icon.AlertCircle />
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Update completed</div>
                                                    <div className="text-muted small mt-1">Restart server 12 to complete the
                                                        update.</div>
                                                    <div className="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <Icon.Bell />
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Lorem ipsum</div>
                                                    <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate
                                                        hendrerit et.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <Icon.Home />
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Login from 192.186.1.8</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <Icon.UserPlus />
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">New connection</div>
                                                    <div className="text-muted small mt-1">Christina accepted your request.
                                                    </div>
                                                    <div className="text-muted small mt-1">14h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown"
                                    data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <Icon.MessageSquare />
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                                    aria-labelledby="messagesDropdown">
                                    <div className="dropdown-menu-header">
                                        <div className="position-relative">
                                            4 New Messages
                                        </div>
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-5.jpg"
                                                        className="avatar img-fluid rounded-circle" alt="Vanessa Tucker"></img>
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Vanessa Tucker</div>
                                                    <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu
                                                        tortor.</div>
                                                    <div className="text-muted small mt-1">15m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-2.jpg"
                                                        className="avatar img-fluid rounded-circle" alt="William Harris"></img>
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">William Harris</div>
                                                    <div className="text-muted small mt-1">Curabitur ligula sapien euismod
                                                        vitae.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-4.jpg"
                                                        className="avatar img-fluid rounded-circle" alt="Christina Mason"></img>
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Christina Mason</div>
                                                    <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.
                                                    </div>
                                                    <div className="text-muted small mt-1">4h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-3.jpg"
                                                        className="avatar img-fluid rounded-circle" alt="Sharon Lessman"></img>
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Sharon Lessman</div>
                                                    <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed,
                                                        posuere ac, mattis non.</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all messages</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                                    data-bs-toggle="dropdown">
                                    <Icon.Settings />
                                </a>

                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                                    data-bs-toggle="dropdown">
                                    <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1"
                                        alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="pages-profile.html">
                                        <Icon.User className="align-middle me-1" /> Profile</a>
                                    <a className="dropdown-item" href="#">
                                        <Icon.PieChart className="align-middle me-1" /> Analytics</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="index.html">
                                        <Icon.Settings className="align-middle me-1" /> Settings & Privacy</a>
                                    <a className="dropdown-item" href="#">
                                        <Icon.HelpCircle className="align-middle me-1" /> Help Center</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="content">
                    <div className="container-fluid p-0">

                        <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

                        <div className="row">
                            <div className="col-xl-6 col-xxl-5 d-flex">
                                <div className="w-100">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mt-0">
                                                            <h5 className="card-title">Sales</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="stat text-primary">
                                                                <Icon.Truck className="align-middle" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h1 className="mt-1 mb-3">2.382</h1>
                                                    <div className="mb-0">
                                                        <span className="text-danger"> <i
                                                            className="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                                                        <span className="text-muted">Since last week</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mt-0">
                                                            <h5 className="card-title">Visitors</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="stat text-primary">
                                                                <Icon.Users className="align-middle" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h1 className="mt-1 mb-3">14.212</h1>
                                                    <div className="mb-0">
                                                        <span className="text-success"> <i
                                                            className="mdi mdi-arrow-bottom-right"></i> 5.25% </span>
                                                        <span className="text-muted">Since last week</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mt-0">
                                                            <h5 className="card-title">Earnings</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="stat text-primary">
                                                                <Icon.DollarSign className="align-middle" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h1 className="mt-1 mb-3">$21.300</h1>
                                                    <div className="mb-0">
                                                        <span className="text-success"> <i
                                                            className="mdi mdi-arrow-bottom-right"></i> 6.65% </span>
                                                        <span className="text-muted">Since last week</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col mt-0">
                                                            <h5 className="card-title">Orders</h5>
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="stat text-primary">
                                                                <Icon.ShoppingCart className="align-middle" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h1 className="mt-1 mb-3">64</h1>
                                                    <div className="mb-0">
                                                        <span className="text-danger"> <i
                                                            className="mdi mdi-arrow-bottom-right"></i> -2.25% </span>
                                                        <span className="text-muted">Since last week</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-xxl-7">
                                <div className="card flex-fill w-100">
                                    <div className="card-header">

                                        <h5 className="card-title mb-0">Recent Movement</h5>
                                    </div>
                                    <div className="card-body py-3">
                                        <div className="chart chart-sm">
                                            <canvas id="chartjs-dashboard-line"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
                                <div className="card flex-fill w-100">
                                    <div className="card-header">

                                        <h5 className="card-title mb-0">Browser Usage</h5>
                                    </div>
                                    <div className="card-body d-flex">
                                        <div className="align-self-center w-100">
                                            <div className="py-3">
                                                <div className="chart chart-xs">
                                                    <canvas id="chartjs-dashboard-pie"></canvas>
                                                </div>
                                            </div>

                                            <table className="table mb-0">
                                                <tbody>
                                                    <tr>
                                                        <td>Chrome</td>
                                                        <td className="text-end">4306</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Firefox</td>
                                                        <td className="text-end">3801</td>
                                                    </tr>
                                                    <tr>
                                                        <td>IE</td>
                                                        <td className="text-end">1689</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
                                <div className="card flex-fill w-100">
                                    <div className="card-header">

                                        <h5 className="card-title mb-0">Real-Time</h5>
                                    </div>
                                    <div className="card-body px-4">
                                        <div id="world_map" style={{ height: '350px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
                                <div className="card flex-fill">
                                    <div className="card-header">

                                        <h5 className="card-title mb-0">Calendar</h5>
                                    </div>
                                    <div className="card-body d-flex">
                                        <div className="align-self-center w-100">
                                            <div className="chart">
                                                <div id="datetimepicker-dashboard"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                                <div className="card flex-fill">
                                    <div className="card-header">

                                        <h5 className="card-title mb-0">Latest Projects</h5>
                                    </div>
                                    <table className="table table-hover my-0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th className="d-none d-xl-table-cell">Start Date</th>
                                                <th className="d-none d-xl-table-cell">End Date</th>
                                                <th>Status</th>
                                                <th className="d-none d-md-table-cell">Assignee</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Project Apollo</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-success">Done</span></td>
                                                <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                                            </tr>
                                            <tr>
                                                <td>Project Fireball</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-danger">Cancelled</span></td>
                                                <td className="d-none d-md-table-cell">William Harris</td>
                                            </tr>
                                            <tr>
                                                <td>Project Hades</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-success">Done</span></td>
                                                <td className="d-none d-md-table-cell">Sharon Lessman</td>
                                            </tr>
                                            <tr>
                                                <td>Project Nitro</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-warning">In progress</span></td>
                                                <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                                            </tr>
                                            <tr>
                                                <td>Project Phoenix</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-success">Done</span></td>
                                                <td className="d-none d-md-table-cell">William Harris</td>
                                            </tr>
                                            <tr>
                                                <td>Project X</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-success">Done</span></td>
                                                <td className="d-none d-md-table-cell">Sharon Lessman</td>
                                            </tr>
                                            <tr>
                                                <td>Project Romeo</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-success">Done</span></td>
                                                <td className="d-none d-md-table-cell">Christina Mason</td>
                                            </tr>
                                            <tr>
                                                <td>Project Wombat</td>
                                                <td className="d-none d-xl-table-cell">01/01/2021</td>
                                                <td className="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span className="badge bg-warning">In progress</span></td>
                                                <td className="d-none d-md-table-cell">William Harris</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                                <div className="card flex-fill w-100">
                                    <div className="card-header">

                                        <h5 className="card-title mb-0">Monthly Sales</h5>
                                    </div>
                                    <div className="card-body d-flex w-100">
                                        <div className="align-self-center chart chart-lg">
                                            <canvas id="chartjs-dashboard-bar"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row text-muted">
                            <div className="col-6 text-start">
                                <p className="mb-0">
                                    <a className="text-muted" href="https://adminkit.io/"
                                        target="_blank"><strong>AdminKit</strong></a> - <a className="text-muted"
                                            href="https://adminkit.io/" target="_blank"><strong>Bootstrap Admin
                                                Template</strong></a> &copy;
                                </p>
                            </div>
                            <div className="col-6 text-end">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>);

}