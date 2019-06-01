import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const RecipeCard = (recipe) => {
  console.log('Receta: ', recipe.title, recipe.main_image.url)
  return (
    <React.Fragment>
    <div className="card">
    <img src={recipe.main_image.url} alt="Avatar" />
      <div className="container">
        <h4><b>{recipe.title}</b></h4> 
        <p>Architect & Engineer</p> 
      </div>
    </div>
    </React.Fragment>
  )
}

export default RecipeCard;