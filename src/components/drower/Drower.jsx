import {Component} from "react";
import QuizList from "../mediaCard/QuizList";
import Menu from "../menu/Menu";
//import { useState } from "react";
import Footer from "../footer/Footer";
import {
    Box,
    AppBar,
    CssBaseline
} from '@mui/material';

export default class ClippedDrawer extends Component {
    state = {
        menuActive: false,
    };

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
                            <div className="burger_btn" onClick={() => this.setMenuActive(!this.menuActive)}>

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
                        <Menu active={this.props.menuActive} setActive={this.props.setMenuActive} header={"Menu"} items={this.props.items}/>
                    </div>
                    <div className="main">
                        <QuizList/>
                    </div>

                </div>
                <Footer/>

            </Box>

        );
    }
}

// export default function ClippedDrawer() {
//     const [menuActive, setMenuActive] = useState(false)
//     const items = [
//         {value: "Main", href: "/main"},
//         {value: "Directory", href: "/directory"},
//         {value: "Rating", href: "/rating"},
//         {value: "Tests", href: "/tests"}
//     ];
//
//     return (
//         <Box sx={{display: ''}}>
//             <CssBaseline/>
//             <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
//                 {/*<QuizHeader/>*/}
//                 <header className="header">
//                     <nav className="nav_menu">
//                         <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
//
//                             <span/>
//                         </div>
//                     </nav>
//                     <div className="header_logo">COGNITIVE QUIZ</div>
//                     <div>
//                         <button className="button">CREATE NEW QUIZ</button>
//                     </div>
//                 </header>
//             </AppBar>
//             <div className="box_main">
//                 <div className="box_menu">
//                     <Menu active={menuActive} setActive={setMenuActive} header={"Menu"} items={items}/>
//                 </div>
//                 <div className="main">
//                     <QuizList/>
//                 </div>
//
//             </div>
//             <Footer/>
//
//         </Box>
//     );
//}