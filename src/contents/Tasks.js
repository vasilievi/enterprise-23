import { useEffect } from 'react';
import * as Icon from 'react-feather';

export default function Tasks() {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <main className="content">
            <div className="container-fluid p-0">

                <a href="#" className="btn btn-primary float-end mt-n1"><i className="fas fa-plus"></i> New task</a>
                <div className="mb-3">
                    <h1 className="h3 d-inline align-middle">Tasks</h1><a className="badge bg-primary ms-2" href="https://adminkit.io/pricing/" target="_blank">Pro
                        Component <i className="fas fa-fw fa-external-link-alt"></i></a>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                                            <i className="align-middle" data-feather="more-horizontal"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title">Backlog</h5>
                                <h6 className="card-subtitle text-muted">Nam pretium turpis et arcu. Duis arcu.</h6>
                            </div>
                            <div className="card-body">

                                <div id="tasks-backlog" style={{"min-height": "50px"}}>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input" defaultChecked></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input" defaultChecked></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-2.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-3.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique.
                                            </p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-4.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-2.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Add new task</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                                            <i className="align-middle" data-feather="more-horizontal"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title">In Progress</h5>
                                <h6 className="card-subtitle text-muted">Nam pretium turpis et arcu. Duis arcu.</h6>
                            </div>
                            <div className="card-body">

                                <div id="tasks-progress" style={{"min-height": "50px"}}>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-3.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-2.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Add new task</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions float-end">
                                    <div className="dropdown position-relative">
                                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static">
                                            <i className="align-middle" data-feather="more-horizontal"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-title">Completed</h5>
                                <h6 className="card-subtitle text-muted">Nam pretium turpis et arcu. Duis arcu.</h6>
                            </div>
                            <div className="card-body">

                                <div id="tasks-completed" style={{"min-height": "50px"}}>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-2.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique.
                                            </p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-4.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-3.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                    <div className="card mb-3 bg-light cursor-grab border">
                                        <div className="card-body p-3">
                                            <div className="float-end me-n2">
                                                <label className="form-check">
                                                    <input type="checkbox" className="form-check-input"></input>
                                                        <span className="form-check-label d-none">Checkbox</span>
                                                </label>
                                            </div>
                                            <p>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis.</p>
                                            <div className="float-end mt-n1">
                                                <img src="img/avatars/avatar-3.jpg" width="32" height="32" className="rounded-circle" alt="Avatar"></img>
                                            </div>
                                            <a className="btn btn-primary btn-sm" href="#">View</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Add new task</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}