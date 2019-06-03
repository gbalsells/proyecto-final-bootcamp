import React from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../redux/actions';
import PreviewCard from '../components/PreviewCard'
import './list.scss'

const mapStateToProps = (state) => ({
  loading: state.chefs.chefsLoading === true,
  chefs: state.chefs.chefs,
});

class ChefList extends React.Component {
  componentDidMount(){
    this.props.dispatch(getChefs());
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
             {
              this.props.chefs.map( (chef, index) => <PreviewCard key={chef.id} element={{object: {...chef}, parent: 'chefs'}}/>)
            }
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(ChefList);
