import React, {useState} from "react";
import {Component} from "react";
import './header.css'
import '../menu/Menu.css'


export default class QuizHeader extends Component {
    state = {
        active: false,
    };

    constructor() {
        super();
        this.hendelToggleOpenMenu = this.hendelToggleOpenMenu.bind(this);
    }

    render() {
        return (
            <header className="header">
                <nav className="nav_menu">
                    <div className="burger_btn" onClick={this.hendelToggleOpenMenu}
                        <span/>
                    </div>
                </nav>
                <div className="header_logo">COGNITIVE QUIZ</div>
                <div>
                    <button className="button">CREATE NEW QUIZ</button>
                </div>
            </header>);
    }

    hendelToggleOpenMenu() {
        this.setState({active: !this.state.active})
    }
}
