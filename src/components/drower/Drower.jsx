import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Box } from '@mui/material';
import QuizList from '../mediaCard/QuizList';
import QuizsRoutes from '../mediaCard/QuizsRoutes';
import NotFound from '../NotFound';
import QuizsRoutesHtml from '../Tests/Html/QuizsRoutesHtml';

export default function ClippedDrawer() {
  return (
            <Box sx={ { display: '' } }>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<QuizList/>} path='/quizs'/>
                        <Route path='*' element={<NotFound/>}/>
                        <Route path='/quizs/*' element={<QuizsRoutes/>}/>
                        <Route path='/html/*' element={<QuizsRoutesHtml/>}/>
                    </Routes>
                </BrowserRouter>
            </Box>
  );
}
