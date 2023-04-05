import * as React from 'react';
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
        {value: "MAIN", href: "/quizs"},
        {value: "HTML", href: "/quizs/html"},
        {value: "CSS", href: "/quizs/css"},
        {value: "JS", href: "/quizs/js"},
        {value: "ReactJS", href: "/quizs/reactjs"},
        {value: "SASS and SCSS", href: "/quizs/sass_and_scss"},
        {value: "GitHub", href: "/quizs/github"},
        {value: "Faworite", href: "/quizs/faworite"},
        {value: "Criate New Quiz", href: "/criatr_new_quiz"}
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