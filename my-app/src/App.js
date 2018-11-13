import React, { Component } from 'react';
import RecipeTable from './components/recipeTable';
import AddRecipeForm from './components/addRecipeForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AddRecipeForm />
        <RecipeTable />
      </div>

    );
  }
}

export default App;
