import React from 'react';
import { connect } from 'react-redux';
import { getGallerieById } from '../redux/actions';
import './list.scss'

const mapStateToProps = (state) => ({
  loading: state.gallerieById.gallerieLoading === true,
  gallerie: state.gallerieById.gallerie
})

class GallerieDetails extends React.Component {

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.props.dispatch(getGallerieById(id));
  }

  render() {
    console.log('Gallerie: ', this.props.gallerie)
    const gallerie = this.props.gallerie;
    return (
      <React.Fragment>
        {this.props.loading ?
          <div className="lds-circle">
            <div>
              Loading...
            </div>
          </div>  :
          <div className="gallerie-detail">
            <h1>{gallerie.title}</h1>
            {
              gallerie.photos.map( (photo, index) =>
              <a href={photo.url}>
                <img src={photo.url} href={photo.url} alt="gallerie"/>
              </a>
              )
            }
            
            <p>
            </p>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, null)(GallerieDetails);
