import React from 'react';
import { connect } from 'react-redux';
import { getGalleries } from '../redux/actions';

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
                <div>
                    <h1>Tenemos {this.props.galleries.length} galleries</h1>
                    {this.props.galleries.map(gallerie => {
                        return `${gallerie.title} \n`
                    })}
                </div>
            }
      </React.Fragment>
    )
      
  }
}

export default connect(mapStateToProps, null)(GallerieList);
