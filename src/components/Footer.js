import { useEffect } from 'react';
import * as Icon from 'react-feather';

export default function Sidebar() {
    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-muted">
                    <div className="col-6 text-start">
                        <p className="mb-0">
                            <a className="text-muted" href="https://adminkit.io/"
                                target="_blank"><strong>Enterprise</strong></a> - <a className="text-muted"
                                    href="https://adminkit.io/" target="_blank"><strong>22.11.15</strong></a> &copy;
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

    )
}