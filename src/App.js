import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import PrivatePage from './PrivatePage'
import PublicPage from './PublicPage'
import './App.css';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRouter path="/private" component={PrivatePage} />
          <PublicRouter path="/" component={PublicPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;