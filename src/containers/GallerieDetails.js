import React from 'react';
import { connect } from 'react-redux';
import { getGallerieById } from '../redux/actions';

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
        {this.props.loading ? <p>CARGANDING</p>:
          <div className="gallerie-list">
            <h1>{gallerie.title}</h1>
            {
              gallerie.photos.map( (photo, index) => <img src={photo.url} alt="gallerie"/>)
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
