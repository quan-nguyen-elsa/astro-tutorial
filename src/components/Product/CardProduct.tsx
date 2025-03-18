import React from 'react';
import { formatPrice } from '../../utils/price-format';
import './CardProduct.css';

interface Product {
  title: string;
  base_price: number;
  discount_price: number;
  discount_percent: number;
  button_text: string;
  currency: string;
  className?: string;
}

const CardProduct : React.FC<Product> = ({title, base_price, discount_price, discount_percent, button_text, className='', currency}) => {
  return (
    <div className={`${className} card-product`}>
      <div className="card-header">
        <h3 className="card-title">{ title }</h3>
        {base_price > discount_price && <p className="card-base-price"><del>{ formatPrice(base_price, currency) }</del></p>}
      </div>
      <div className="card-body">
        {base_price > discount_price && <p className="price-percent"><span className="percentage-badge">{ discount_percent }% OFF</span></p>}
        <p className="card-price">{ formatPrice(discount_price, currency) }</p>
      </div>
      <button type="button" className="card-button">{ button_text }</button>
    </div>
  )
}

export default CardProduct
