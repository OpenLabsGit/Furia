import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Importez vos composants pour chaque route
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      {/* Utilisez le composant Switch pour rendre uniquement la première route correspondante */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
