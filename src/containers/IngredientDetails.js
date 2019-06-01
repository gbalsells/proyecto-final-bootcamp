import React from 'react';
import { connect } from 'react-redux';
import { getIngredientById } from '../redux/actions';
import noImage from '../assets/noImage.jpeg'
// import './ingredientList.scss'

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
        {this.props.loading ? <p>CARGANDING</p>:
          <div className="ingredient-list">
            <h1>{ingredient.name}</h1>
            <img src={ingredient.image ? ingredient.image.url : noImage} alt="ingredient"/>
            <p>
              Nutritional value: {ingredient.nutritional_value}
              Calories: {ingredient.calories}
              Used in {ingredient.recipes.length} recipes:
            </p>
            {ingredient.recipes.map( (recipe, index) =>
              <ul key={recipe._id}>
                <li>{recipe.title}</li>
              </ul>)}
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(IngredientDetails);
