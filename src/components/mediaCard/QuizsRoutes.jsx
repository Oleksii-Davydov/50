import React from 'react';
import QuizsTests from '../quizsTests/QuizsTests'
import {Routes, Route} from 'react-router-dom';

export default function QuizsRoutes() {
    return (
        <Routes>
            <Route path='/:name' element={<QuizsTests/>}/>
        </Routes>
    )
}