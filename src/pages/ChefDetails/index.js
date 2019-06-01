import React from 'react';
import ChefDetails from '../../containers/ChefDetails'

const ChefDetail = (props) => {
  return (
    <React.Fragment>
      <h1>Chef Detail</h1>
      <ChefDetails { ...props }/>
    </React.Fragment>
  )
}

export default ChefDetail;