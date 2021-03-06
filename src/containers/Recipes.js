import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../redux/actions';
import RecipeCard from '../components/RecipeCard'
import './list.scss'

const mapStateToProps = (state) => ({
  loading: state.recipes.recipesLoading === true,
  recipes: state.recipes.recipes,
});

class Recipes extends React.Component {
  componentDidMount(){
    this.props.dispatch(getRecipes());
  }
  

  render() {
    return(
      <React.Fragment>
        {this.props.loading ? 
        <div className="lds-circle">
          <div>
            Loading...
          </div>
        </div>  :
          <div className="list">
              {this.props.recipes.map(recipe => {
                  return <RecipeCard key={recipe._id} {...recipe} />
              })}
          </div>
            }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(Recipes);
