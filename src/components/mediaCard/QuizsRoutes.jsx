import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuizsTests from '../quizsTests/QuizsTests';

export default function QuizsRoutes() {
  return (
        <Routes>
            <Route path='/:name' element={<QuizsTests/>}/>
        </Routes>
  );
}
