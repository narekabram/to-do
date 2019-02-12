import * as React from "react";

import './heaser.scss';
import '../../App.scss';
import {NavLink} from "react-router-dom";

export class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <h2><NavLink to="/">Header</NavLink></h2>
                        <div className="header-wrapper-buttons">
                            <span>
                                <NavLink to="/user/login">Login</NavLink>
                            </span>
                            <span>
                                <NavLink to="/user/register">Register</NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}