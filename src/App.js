import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
// Import other necessary components

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/game/:id" component={GamePage} />
          {/* You can add more routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
