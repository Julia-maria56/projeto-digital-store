import React from 'react';
import {Link } from "react-router-dom"

const ProductCard = ({ image, name, price, priceDiscount, id }) => {
  const hasDiscount = !!priceDiscount;

  return (
    <div className="ProductCard">
      <div className="ProductCard-image-wrapper">
        <Link to = {`/produtos/${id}`}>
          <img
            className="ProductCard-image"
            id={id}
            src={image}
            alt={name}
            width="292"
            height="321"
          />
        </Link>
      </div>
      

      <div className="ProductCard-info">
        <div className="ProductCard-name">{name}</div>
        <div className="ProductCard-prices">
          <div
            className={`ProductCard-price ${
              hasDiscount ? 'strikethrough' : ''
            }`}
          >
            ${price}
          </div>
          {hasDiscount && (
            <div className="ProductCard-price-discount">${priceDiscount}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
