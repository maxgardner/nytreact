import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Reference the high-level components
var Main = require("../components/Main");

// Export the Routes
module.exports = (
  <Router>
    <Route path="/" component={Main} />
  </Router>
);
