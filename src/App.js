import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecVideos from './components/RecVideos/RecVideos';
import SearchPage from './components/SearchPage/SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router>
      <Header/>
      <Switch>
        <Route path='/search/:searchTerm'>
          <div className="app_page">
            <Sidebar/>
            <SearchPage/>
          </div>
        </Route>
        <Route path='/'>
          <div className="app_page">
            <Sidebar/>
            <RecVideos/>
          </div>
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
