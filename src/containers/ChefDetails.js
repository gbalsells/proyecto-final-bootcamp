import React from 'react';
import { connect } from 'react-redux';
import { getChefById } from '../redux/actions';
import noImage from '../assets/noImage.jpeg'
import RecipeCard from '../components/RecipeCard'
import './list.scss'
import './detail.scss'

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
    console.log(chef)
    return(
      <React.Fragment>
        {this.props.loading ?
          <div className="lds-circle">
            <div>
              Loading...
            </div>
          </div>  :
          <div className="chef-detail">
            <div className="chef-detail__image">
              <img src={chef.image ? chef.image.url : noImage} alt="chef"/>
            </div>
            <div className="chef-detail__data">
              <h1>{chef.full_name}</h1>
              <p>
                {chef.bio}
              </p>
              <h2>
                {chef.recipes.length} 
                {
                  chef.recipes.length === 1 ? ' recipe': ' recipes'
                }
              </h2>
              <div className="recipes-in-card">
                {chef.recipes.map( (recipe, index) => <RecipeCard key={recipe._id} {...recipe} />)}
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(ChefDetails);
