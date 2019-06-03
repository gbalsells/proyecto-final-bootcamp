import React from 'react';
import { connect } from 'react-redux';
import { getRecipeById } from '../redux/actions';
import { Link } from 'react-router-dom';
import PreviewCard from '../components/PreviewCard'
import ReactMarkdown from 'react-markdown';
import './detail.scss'
import './list.scss'

const mapStateToProps = (state) => ({
  loading: state.recipesById.recipeLoading === true,
  recipe: state.recipesById.recipe,
});

class RecipeDetails extends React.Component {
  componentDidMount(){
    const { match } = this.props
    const { params } = match
    const { id } = params
    this.props.dispatch(getRecipeById(id));
  }
  

  render() {
    console.log('RECIPE: ', this.props.recipe)
    const recipe = this.props.recipe
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
              <img src={recipe.main_image.url} alt="recipe"/>
            </picture>
            <div className="detail">
              <h1>{recipe.title}</h1>
              <div className="detail__info">
              {
                recipe.rating === 1 ? 
                  <div>
                    <a href="star" className="detail__info__fullStar">⋆</a>
                    <a href="star" className="detail__info__emptyStar">⋆⋆⋆⋆</a>
                  </div> :
                recipe.rating === 2 ? 
                  <div>
                    <a href="star" className="detail__info__fullStar">⋆⋆</a>
                    <a href="star" className="detail__info__emptyStar">⋆⋆⋆</a>
                  </div> :
                recipe.rating === 3 ? 
                <div>
                  <a href="star" className="detail__info__fullStar">⋆⋆⋆</a>
                  <a href="star" className="detail__info__emptyStar">⋆⋆</a>
                  </div> :
                recipe.rating === 4 ? 
                <div>
                  <a href="star" className="detail__info__fullStar">⋆⋆⋆⋆</a>
                  <a href="star" className="detail__info__emptyStar">⋆</a>
                </div> : 
                <div>
                  <a href="star" className="detail__info__fullStar">⋆⋆⋆⋆⋆</a>
                </div>
              }
                <i className="fa fa-clock-o" > {recipe.prep_time} </i>
                <div className="tooltip">
                <Link to={`/chefs/${recipe.chef._id}`} className="detail__info__chef">
                  <img src={recipe.chef.image.url} alt="chef" />
                  <p>By {recipe.chef.full_name}</p>
                  <span className="tooltiptext">Click to see this chef's details</span>
                  </Link>
                </div>
              </div>
              <div className="detail__ingredients">
                {
                  recipe.ingredients.map( (ingredient, index) => <PreviewCard key={ingredient._id} element={{object: {...ingredient}, parent: 'ingredients'}} />)
                }
              </div>
              <div className="detail__instructions">
                <ReactMarkdown key={recipe._id} source={recipe.instructions} />
              </div>
            </div>
          </div>
            }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(RecipeDetails);
