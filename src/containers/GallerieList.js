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
    console.log(this.props)
    return(
      <React.Fragment>
        {this.props.loading ? <p>CARGANDING</p>:
          <div className="list">
            {
              this.props.galleries.map( (gallerie, index) => <PreviewCard key={gallerie.id} element={{object: {...gallerie}, parent: 'galleries'}} /> )
            }
          </div>
        }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(GallerieList);
