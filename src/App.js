import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Calculator from './components/Calculator';
import Quotes from './quotes/Quotes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
