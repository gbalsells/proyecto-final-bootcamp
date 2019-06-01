import React from 'react';
import { connect } from 'react-redux';
import { getIngredientById } from '../redux/actions';
// import './ingredientList.scss'

const mapStateToProps = (state) => ({
  loading: state.ingredient.ingredientLoading === true,
  ingredient: state.ingredient.ingredient,
});

class IngredientDetails extends React.Component {

  componentDidMount(){
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.props.dispatch(getIngredientById(id));
  }
  
  render() {
    console.log('Props: ', this.props.ingredient)
    return(
      <React.Fragment>
        {this.props.loading ? <p>CARGANDING</p>:
          <div className="ingredient-list">
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(IngredientDetails);
