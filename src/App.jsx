import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Views
import WelcomeView from './views/Welcome';
import HomePage from './views/HomePage';
// Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderMenuMobile from './components/HeaderMenuMobile/HeaderMenuMobile';
import Article from './components/Article/Article';

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <WelcomeView />
          </Route>
          {menu ? (
            <HeaderMenuMobile handleMenu={handleMenu} menu={menu} />
          ) : (
            <Route path='/home'>
              <Header menu={menu} handleMenu={handleMenu} />
              <HomePage />
              <Footer />
            </Route>
          )}

          {/* Esto redirecciona hacia el articulo que hayan clickeado */}
          <Route path={`/article/:id`}>
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
