import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/page/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vikyhome" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;