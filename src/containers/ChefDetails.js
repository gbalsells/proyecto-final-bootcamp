import React from 'react';
import { connect } from 'react-redux';
import { getChefById } from '../redux/actions';
import noImage from '../assets/noImage.jpeg'
// import './ingredientList.scss'

const mapStateToProps = (state) => ({
  loading: state.chefById.chefLoading === true,
  chef: state.chefById.chef,
});

class ChefDetails extends React.Component {

  componentDidMount(){
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.props.dispatch(getChefById(id));
  }
  
  render() {
    const chef = this.props.chef
    return(
      <React.Fragment>
        {this.props.loading ? <p>CARGANDING</p>:
          <div className="chef-list">
            <h1>{chef.full_name}</h1>
            <img src={chef.image ? chef.image.url : noImage} alt="chef"/>
            <p>
            </p>
            {chef.recipes.map( (recipe, index) =>
              <ul key={recipe._id}>
                <li>{recipe.title}</li>
              </ul>)}
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(ChefDetails);
