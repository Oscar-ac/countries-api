// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, {Fragment, useState} from 'react';
import './App.css';
import CountriesContextProvider from './store/CountriesContextProvider';
import Header from './components/UI/Header';
import Grid from './components/UI/Grid';
import Interior from './components/UI/Interior';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  const [theme, setTheme] = useState("light");
  const toggleDarkModeHandler = () => {
    if(theme === "light"){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }


  return (
    <Router>
      <div className="App" data-theme={theme}>
        <CountriesContextProvider>
          <Header darkModeFunction={toggleDarkModeHandler}></Header>
          <Routes>
            <Route path="/rest-countries/" element={<Home></Home>} />
            <Route path="/rest-countries/:name" element={<Inside></Inside>} />
          </Routes>
        </CountriesContextProvider>
      </div>
    </Router>
  );
}



export default App;