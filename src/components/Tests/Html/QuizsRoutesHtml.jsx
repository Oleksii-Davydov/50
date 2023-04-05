import React from "react";
import HtmlTestBasic from "../Html/HtmlTestBasic"
import {Routes, Route} from "react-router-dom";

export default function QuizsRoutesHtml() {
    return (
        <Routes>
            <Route path='/:name' element={<HtmlTestBasic/>}/>
        </Routes>
    )
}