import logo from '../chuck_logo.png';
import {Link} from 'wouter';

import './Header.css';

export default function Header() {
    return (
        <div className="App-header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
        </div>
    )
}