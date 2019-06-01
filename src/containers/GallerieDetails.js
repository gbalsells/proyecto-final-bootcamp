import React from 'react';
import { connect } from 'react-redux';
import { getGallerieById } from '../redux/actions';
import noImage from '../assets/noImage.jpeg';

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
    const gallerie = this.props.gallerie;
    return (
      <React.Fragment>
        {this.props.loading ? <p>CARGANDING</p>:
          <div className="gallerie-list">
            <h1>{gallerie.full_name}</h1>
            <img src={gallerie.image ? gallerie.image.url : noImage} alt="gallerie"/>
            <p>
            </p>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, null)(GallerieDetails);
