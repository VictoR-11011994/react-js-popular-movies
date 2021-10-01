import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import ListMovies from './components/main/ListMovies';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component = { ListMovies }></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
