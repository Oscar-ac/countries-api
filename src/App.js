// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import CountriesContextProvider from './store/CountriesContextProvider';
import Header from './components/UI/Header';
import Grid from './components/UI/Grid';


// https://restcountries.com/
// header, main, cards, single page, router

function App() {
  return (
    <div className="App">
      <CountriesContextProvider>
        <Header></Header>
        <Grid></Grid>
      </CountriesContextProvider>
    </div>
  );
}

export default App;