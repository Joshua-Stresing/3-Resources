import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Families from './Views/Families/Families';
import Movies from './Views/Movies/Movies';
import Directors from './Views/Directors/Directors';


function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path = "/">
            <Home />
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
