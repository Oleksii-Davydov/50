import React from "react";
import HtmlTestBasic from "../Html/HtmlTestBasic"
import {Routes, Route} from "react-router-dom";
import Timer from '../../Timer/Timer'
export default function QuizsRoutesHtml() {
    return (
        <Routes>
            <Route path='/:name' element={<Timer/>}/>
            {/*<Route path='/:name' element={<HtmlTestBasic/>}/>*/}
        </Routes>
    )
}