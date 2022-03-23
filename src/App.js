import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Views/components/Header';
import Families from './Views/Families/Families';
import Movies from './Views/Movies/Movies';
import Directors from './Views/Directors/Directors';
import Main from './Views/Main/Main';

function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path = "/">
            <Main />
          </Route>
          <Route exact path = "/families">
            <Families />
          </Route>
          <Route exact path = "/movies">
            <Movies />
          </Route>
          <Route exact path = "/directors">
            <Directors />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;