import React from 'react';
import './styles.scss';
import noImage from '../../assets/noImage.jpeg'

const ChefCard = ({image, name}) => {
  console.log(name)
  return (
    <div className="card">
      <img src={image ? image.url : noImage} alt="image" className="card__image"></img>
      <div className="card__container">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default ChefCard;