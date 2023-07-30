import './index.css'
import React from "react";

const CardItem = props => {
    const {cardDetails, clickedImage} = props
    const {id, imageUrl, isClicked, isSelected} = cardDetails
    const onClickImage = () => {
        clickedImage(id)
    }
    return (
        <li className="image-container">
            <button className="image-button" onClick={onClickImage}>
                {
                   
                   (isClicked || isSelected) ? <img src={imageUrl} className="image" />: null
                
                }
            </button>
        </li>
    )
}

export default CardItem
