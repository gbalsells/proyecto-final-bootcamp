import React from 'react';
import './previewCard.scss';
import noImage from '../../assets/noImage.jpeg'
import { Link } from 'react-router-dom'

const preview = ({element}) => {
  const object = element.object
  let page = 'ingredients'
  let name = object.name
  let cardClass = `img__${element.parent}`
  if (element.parent === 'chef'){
    page = 'chefs'
    name = object.full_name
  }
  if (element.parent === 'gallerie') {
    page = 'galleries'
  }
  console.log(cardClass)
  return (
    <div className="preview-card">
      <Link to={`/${page}/${object._id}`} >
        <img src={object.image ? object.image.url : noImage} alt="ingredient" className={cardClass}></img>
      </Link>
      <div className="preview-card__container">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default preview;