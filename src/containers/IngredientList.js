import React from 'react';
import { connect } from 'react-redux';
import { getIngredients } from '../redux/actions';
import PreviewCard from '../components/PreviewCard';
import './list.scss'

const mapStateToProps = (state) => ({
  loading: state.ingredients.ingredientsLoading === true,
  ingredients: state.ingredients.ingredients,
});

class IngredientList extends React.Component {
  componentDidMount(){
    this.props.dispatch(getIngredients());
  }
  
  render() {
    return(
      <React.Fragment>
        {this.props.loading ? <p>CARGANDING</p>:
          <div className="list">
            {
              this.props.ingredients.map( (ingredient, index) => <PreviewCard key={ingredient.id} element={{object: {...ingredient}, parent: 'ingredient'}}/>)
            }
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(IngredientList);
