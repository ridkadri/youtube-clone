import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecVideos from './components/RecVideos/RecVideos';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_page">
      <Sidebar/>
      <RecVideos/>
      </div>
    </div>
  );
}

export default App;
