import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Nav from './components/Nav';
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import Chefs from './pages/Chefs'
import ChefDetail from './pages/ChefDetail'
import Ingredients from './pages/Ingredients'
import IngredientDetails from './pages/IngredientDetails'
import Galleries from './pages/Galleries'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="app-container__inner">
          <Switch>
            <Route exact path={`${routes.HOME}`} component={Home} />
            <Route exact path={`${routes.RECIPE_DETAIL}`} component={RecipeDetail} />
            <Route exact path={`${routes.CHEFS}`} component={Chefs} />
            <Route exact path={`${routes.CHEF_DETAIL}`} component={ChefDetail} />
            <Route exact path={`${routes.INGREDIENTS}`} component={Ingredients} />
            <Route exact path={`${routes.INGREDIENT_DETAIL}`} component={IngredientDetails} />
            <Route exact path={`${routes.GALLERIES}`} component={Galleries} />
            <Route render={() => <h1>404 - No se encontró</h1>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
