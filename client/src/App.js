import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CreateGig from "./components/CreateGig";
import {Router,Redirect} from "@reach/router";
import SingleGig from "./components/SingleGig";
import EditGig from './components/EditGig'
function App() {
  return (
    <div className="App">
      <Router>
        <CreateGig path="/"/>
        <SingleGig path="/:id"/>
        <EditGig path="/:id/edit"/>
        <Redirect from="/processing" to='/' noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
