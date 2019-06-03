import React from 'react';
import { connect } from 'react-redux';
import { getIngredientById } from '../redux/actions';
import noImage from '../assets/noImage.jpeg'
import RecipeCard from '../components/RecipeCard';
import './list.scss'
import './detail.scss'

const mapStateToProps = (state) => ({
  loading: state.ingredientById.ingredientLoading === true,
  ingredient: state.ingredientById.ingredient,
});

class IngredientDetails extends React.Component {

  componentDidMount(){
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.props.dispatch(getIngredientById(id));
  }
  
  render() {
    const ingredient = this.props.ingredient
    console.log('Props: ', this.props.ingredient)
    return(
      <React.Fragment>
        {this.props.loading ?
          <div className="lds-circle">
            <div>
              Loading...
            </div>
          </div>  :
          <div> 
            <picture>
              <img src={ingredient.image ? ingredient.image.url : noImage} alt="ingredient"/>
            </picture>
            <div className="detail">
              <h1>{ingredient.name}</h1>
              <ul>
                <li>
                  Nutritional value: {ingredient.nutritional_value}
                </li>
                <li>
                  Calories: {ingredient.calories}
                </li>
              </ul>
              <h2>
                Used in {ingredient.recipes.length} 
                {
                  ingredient.recipes.length === 1 ? ' recipe': ' recipes'
                }
              </h2>
              <div className="recipes-in-card">
                {ingredient.recipes.map( (recipe, index) => <RecipeCard key={recipe._id} {...recipe} />)}
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(IngredientDetails);
