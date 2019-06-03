import React from 'react';
import GallerieDetails from '../../containers/GallerieDetails'

const GallerieDetail = (props) => {
  return(
    <React.Fragment>
      <GallerieDetails { ...props } />
    </React.Fragment>
  )
}

export default GallerieDetail;