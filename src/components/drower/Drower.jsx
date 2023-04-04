import * as React from 'react';
import QuizList from "../mediaCard/QuizList";
import QuizsRoutes from "../mediaCard/QuizsRoutes";
import {Box} from '@mui/material';
import NotFound from "../NotFound";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function ClippedDrawer() {

    return (
            <Box sx={{display: ''}}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<QuizList/>} path='/quizs'/>
                        <Route path='*' element={<NotFound/>}/>
                        <Route path='/quizs/*' element={<QuizsRoutes/>}/>
                    </Routes>
                </BrowserRouter>
            </Box>
    );
}