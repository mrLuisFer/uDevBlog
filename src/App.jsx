import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Views
import WelcomeView from './views/Welcome';
import HomePage from './views/HomePage';
import About from './views/About';
// Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderMenuMobile from './components/HeaderMenuMobile/HeaderMenuMobile';
import Article from './components/Article/Article';
import BtnToTop from './components/BtnToTop/BtnToTop';
import Descubrir from './views/Descubrir';
// Routes
import { routes } from './routes/routes';

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <Router>
      <main className='App'>
        <Switch>
          <Route exact path={routes.root}>
            <WelcomeView />
          </Route>
          {menu ? (
            <HeaderMenuMobile handleMenu={handleMenu} menu={menu} />
          ) : (
            <Route path={routes.home}>
              <Header menu={menu} handleMenu={handleMenu} />
              <HomePage />
              <BtnToTop />
              <Footer />
            </Route>
          )}

          {menu ? (
            <HeaderMenuMobile handleMenu={handleMenu} menu={menu} />
          ) : (
            <Route path={routes.about}>
              <Header menu={menu} handleMenu={handleMenu} />
              <About />
              <BtnToTop />
              <Footer />
            </Route>
          )}

          {menu ? (
            <HeaderMenuMobile handleMenu={handleMenu} menu={menu} />
          ) : (
            <Route path={routes.descubrir}>
            <Header menu={menu} handleMenu={handleMenu} />  
            <Descubrir />
            <Footer />
            </Route>
          )}

          {/* Esto redirecciona hacia el articulo que hayan clickeado */}
          <Route path={`/article/:id`}>
            <Header menu={menu} handleMenu={handleMenu} />
            <Article />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
