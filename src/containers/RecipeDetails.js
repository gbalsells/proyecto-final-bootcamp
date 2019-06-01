import React from 'react';
import { connect } from 'react-redux';
import { getRecipeById } from '../redux/actions';
import ReactMarkdown from 'react-markdown';

const mapStateToProps = (state) => ({
  loading: state.recipes.recipeLoading === true,
  recipe: state.recipe.recipe,
});

class RecipeDetails extends React.Component {
  componentDidMount(){
    this.props.dispatch(getRecipeById());
  }
  

  render() {
    console.log(this.props)
    return(
      <React.Fragment>
        {this.props.loading ? <p>CARGANDING</p>:
                <div>
                  Hola
                </div>
            }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(RecipeDetails);
