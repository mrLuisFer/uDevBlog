import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Views
import WelcomeView from './views/Welcome';
import HomePage from './views/HomePage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <WelcomeView />
          </Route>
          {/* La view de Welcome redirecciona hacia la HomePage */}
          <Route path='/home'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
