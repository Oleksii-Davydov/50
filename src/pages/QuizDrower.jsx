import * as React from 'react';
import {
    Box,
    AppBar,
    CssBaseline,
} from '@mui/material';
import QuizHeader from "./QuizHeader";
import QuizList from "./QuizList";
import QuizMenu from "./QuizMenu";
import {useState} from "react";
import QuizFooter from "./QuizFooter";

const drawerWidth = 240;

export default function ClippedDrawer() {

    const [menuActive, setMenuActive] = useState(false)
    const items = [{value: "Main", href: "/main"}, {value: "Directory", href: "/directory"},
        {value: "Rating", href: "/rating"}, {value: "Tests", href: "/tests"}];
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
                    <QuizMenu active={menuActive} setActive={setMenuActive} header={"Menu"} items={items}/>
                </div>
                <div className="main">
                    <QuizList/>
                </div>

            </div>

            {/*<QuizMenu active={menuActive} setActive={setMenuActive} header={"Menu"} items={items}/>*/}
            <QuizFooter/>

        </Box>
    );
}
