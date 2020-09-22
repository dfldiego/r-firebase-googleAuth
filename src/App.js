import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivatePage from './PrivatePage'
import PublicPage from './PublicPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PublicPage} />
          <Route path="/private" component={PrivatePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;