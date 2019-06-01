import React from 'react';
import './styles.scss';
import noImage from '../../assets/noImage.jpeg'
import { Link } from 'react-router-dom'

const preview = ({element}) => {
  const object = element.object
  let page = 'ingredients'
  let name = object.name
  if (element.parent === 'chef'){
    page = 'chefs'
    name = object.full_name
  }

  console.log('Page:', page, 'Parent: ', element.parent)
  return (
    <div className="card">
      <Link to={`/${page}/${object._id}`} >
        <img src={object.image ? object.image.url : noImage} alt="ingredient" className="card__image"></img>
      </Link>
      <div className="card__container">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default preview;