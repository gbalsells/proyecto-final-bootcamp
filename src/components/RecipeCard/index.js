import React from 'react';
import { Link } from 'react-router-dom';
import './recipeCard.scss';

const RecipeCard = (recipe) => {
  return (
    <React.Fragment>
    <div className="recipe-card">
      <Link to={`/recipes/${recipe._id}`} >
        <img src={recipe.main_image.url} alt="recipe"></img>
      </Link>
      <div className="recipe-card__container">
        <h1>{recipe.title}</h1>
        <div className="recipe-card__container__info">
          {
            recipe.rating === 1 ? 
              <div>
                <a href="star" className="recipe-card__container__info__fullStar">⋆</a>
                <a href="star" className="recipe-card__container__info__emptyStar">⋆⋆⋆⋆</a>
              </div> :
            recipe.rating === 2 ? 
              <div>
                <a href="star" className="recipe-card__container__info__fullStar">⋆⋆</a>
                <a href="star" className="recipe-card__container__info__emptyStar">⋆⋆⋆</a>
              </div> :
            recipe.rating === 3 ? 
            <div>
              <a href="star" className="recipe-card__container__info__fullStar">⋆⋆⋆</a>
              <a href="star" className="recipe-card__container__info__emptyStar">⋆⋆</a>
              </div> :
            recipe.rating === 4 ? 
            <div>
              <a href="star" className="recipe-card__container__info__fullStar">⋆⋆⋆⋆</a>
              <a href="star" className="recipe-card__container__info__emptyStar">⋆</a>
            </div> : 
            <div>
              <a href="star" className="recipe-card__container__info__fullStar">⋆⋆⋆⋆⋆</a>
            </div>
          }
          <i className="fa fa-clock-o" > {recipe.prep_time} </i>
        </div>
        {
          recipe.chef.image ?
          <Link to={`/chefs/${recipe.chef._id}`} className="recipe-card__container__chef">
            <img src={recipe.chef.image.url} alt="chef" />
            <p>By {recipe.chef.full_name}</p>
          </Link> : ''
        }
        
      </div>
    </div>
    </React.Fragment>
  )
}

export default RecipeCard;