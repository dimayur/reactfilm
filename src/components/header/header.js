import "./header.css";
import * as React from "react";
import logotype from "../../images/logo.svg";
import { Link } from "react-router-dom";


function HeaderDraw() {
    return(
        <div className={HeaderDraw}>
            <header className="fixedhead">

                <a className="logo" href="#">
                    <img src={logotype} alt="1" />
                </a>

                <nav>
                    <ul className="nav__links">
                        <li><Link to="/">ГОЛОВНА</Link></li>
                        <li><Link to="/films">ФІЛЬМИ</Link></li>
                        <li><a href="#">ПРО НАС</a></li>
                    </ul>
                </nav>
                <Link to="/films" className="fixthis">
                    <button className="btn btn-primary">
                        <span>УВІЙТИ</span>
                    </button>
                </Link>
            </header>

        </div>
    );
}

export default HeaderDraw;