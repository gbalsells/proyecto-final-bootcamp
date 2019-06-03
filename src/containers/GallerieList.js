import React from 'react';
import { connect } from 'react-redux';
import { getGalleries } from '../redux/actions';
import PreviewCard from '../components/PreviewCard';
import './list.scss'

const mapStateToProps = (state) => ({
  loading: state.galleries.galleriesLoading === true,
  galleries: state.galleries.galleries,
});

class GallerieList extends React.Component {
  componentDidMount(){
    this.props.dispatch(getGalleries());
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
              this.props.galleries.map( (gallery, index) => <PreviewCard key={gallery.id} element={{object: {...gallery}, parent: 'galleries'}} /> )
            }
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(GallerieList);
