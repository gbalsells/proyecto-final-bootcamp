import React from 'react';
import ChefDetails from '../../containers/ChefDetails'

const ChefDetail = (props) => {
  return (
    <React.Fragment>
      <ChefDetails { ...props }/>
    </React.Fragment>
  )
}

export default ChefDetail;