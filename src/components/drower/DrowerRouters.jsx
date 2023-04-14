import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClippedDrawer from './Drower';

export default function DrowerRouters() {
  return (
    <Routes>
      <Route path='/:name' element={<ClippedDrawer/>}/>
    </Routes>
  );
}
