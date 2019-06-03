import React from 'react';
import './previewCard.scss';
import noImage from '../../assets/noImage.jpeg'
import { Link } from 'react-router-dom'

const preview = ({element}) => {
  const object = element.object
  let name = object.name
  let cardClass = `img__${element.parent}`
  if (element.parent === 'chefs'){
    name = object.full_name
  }
  if (element.parent === 'galleries') {
    name = object.title
  }
  return (
    <div className="preview-card">
      <Link to={`/${element.parent}/${object._id}`} >
        <img src={
          element.parent === 'galleries' ? object.photos[0].url :
          object.image ? object.image.url : noImage} alt="ingredient" className={cardClass}></img>
      </Link>
      <div className="preview-card__container">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default preview;