import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Timer from '../../Timer/Timer';

export default function QuizsRoutesHtml() {
  return (
    <Routes>
      <Route path='/:name' element={<Timer />} />
    </Routes>
  );
}
