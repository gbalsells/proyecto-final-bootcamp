import React from 'react';
import './styles.scss';
import noImage from '../../assets/noImage.jpeg'
import { Link } from 'react-router-dom'

const IngredientPreview = ({image, name, _id}) => {
  console.log(name)
  return (
    <div className="card">
      <Link to={`/ingredients/${_id}`} >
        <img src={image ? image.url : noImage} alt="ingredient" className="card__image"></img>
      </Link>
      <div className="card__container">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default IngredientPreview;