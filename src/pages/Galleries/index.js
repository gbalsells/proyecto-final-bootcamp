import React from 'react';
import GallerieList from '../../containers/GallerieList'
import '../pages.scss'

const Galleries = () => {
  return(
    <React.Fragment>
      <h1 className="page-title">Check out our image galleries</h1>
      <GallerieList />
    </React.Fragment>
  )
}

export default Galleries;