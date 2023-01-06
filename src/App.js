// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, {Fragment} from 'react';
import './App.css';
import CountriesContextProvider from './store/CountriesContextProvider';
import Header from './components/UI/Header';
import Grid from './components/UI/Grid';
import Interior from './components/UI/Interior';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// https://restcountries.com/
// header, main, cards, single page, router

const Home = () => (
  <Fragment>
    <Grid></Grid>
  </Fragment>
);

const Inside = () => (
  <Fragment>
    <Interior></Interior>
  </Fragment>
);

function App() {
  return (
    <Router>
      <div className="App">
        <CountriesContextProvider>
          <Header></Header>
          <Routes>
            <Route path="" element={<Home></Home>} />
            <Route path="/:name" element={<Inside></Inside>} />
          </Routes>
        </CountriesContextProvider>
      </div>
    </Router>
  );
}



export default App;