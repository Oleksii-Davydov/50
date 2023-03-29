import React from "react";
import {Component} from "react";
import QuizList from "../mediaCard/QuizList";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import {
    Box,
    AppBar,
    CssBaseline
} from '@mui/material';

export default class ClippedDrawer extends Component {
    state = {
        active: false,
    };

    constructor() {
        super();
        this.hendelToggleOpenMenu = this.hendelToggleOpenMenu.bind(this);
    }

    render() {
        const items = [
            {value: "Main", href: "/main"},
            {value: "Directory", href: "/directory"},
            {value: "Rating", href: "/rating"},
            {value: "Tests", href: "/tests"}
        ]
        return (
            <Box sx={{display: ''}}>
                <CssBaseline/>
                <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                    {/*<QuizHeader/>*/}
                    <header className="header">
                        <nav className="nav_menu">
                            <div className="burger_btn" onClick={this.hendelToggleOpenMenu}>

                                <span/>
                            </div>
                        </nav>
                        <div className="header_logo">COGNITIVE QUIZ</div>
                        <div>
                            <button className="button">CREATE NEW QUIZ</button>
                        </div>
                    </header>
                </AppBar>
                <div className="box_main">
                    <div className="box_menu">
                        <Menu active={this.state.active} setActive={this.setMenuActive} header={"Menu"} items={items}/>
                    </div>
                    <div className="main">
                        <QuizList/>
                    </div>
                </div>
                <Footer/>
            </Box>
        );
    }

    hendelToggleOpenMenu() {
        this.setState({active: !this.state.active})
    }
}

