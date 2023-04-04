import * as React from 'react';
import QuizList from "../mediaCard/QuizList";
import Menu from "../menu/Menu";
import {useState} from "react";
import Footer from "../footer/Footer";
import {
    Box,
    AppBar,
    CssBaseline
} from '@mui/material';

export default function BoxTemplate({ children }) {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        {value: "Main", href: "/quizs"},
        {value: "Directory", href: "/directory"},
        {value: "Rating", href: "/rating"},
        {value: "Tests", href: "/tests"}
    ];

    return (
        <Box sx={{display: ''}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                {/*<QuizHeader/>*/}
                <header className="header">
                    <nav className="nav_menu">
                        <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>

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
                    <Menu active={menuActive} setActive={setMenuActive} header={"Menu"} items={items}/>
                </div>
                <div className="main">
                    {children}
                </div>

            </div>
            <Footer/>

        </Box>
    );
}