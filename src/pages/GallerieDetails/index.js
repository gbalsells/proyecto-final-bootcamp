import React from 'react';
import GallerieDetails from '../../containers/GallerieDetails'

const GallerieDetail = (props) => {
  return(
    <React.Fragment>
      <h1>Galleries</h1>
      <GallerieDetails { ...props } />
    </React.Fragment>
  )
}

export default GallerieDetail;