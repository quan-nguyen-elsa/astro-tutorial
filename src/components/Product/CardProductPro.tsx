import React from 'react';
import { formatPrice } from '../../utils/price-format';
import './CardProductPro.css';

interface Product {
  title: string;
  base_price: number;
  discount_price: number;
  discount_percent: number;
  button_text: string;
  currency: string;
  className?: string;
}

const CardProductPro : React.FC<Product> = ({title, base_price, discount_price, discount_percent, button_text, className='', currency}) => {
  return (
    <div className={`${className} card-product-pro`}>
      <h3 className="card-title-pro">{ title }</h3>
      <div className="card-price-pro">
        {base_price > discount_price && <p className="card-base-price-pro"><del>{ formatPrice(base_price, currency) }</del></p>}
        <p className="card-price-pro">{ formatPrice(discount_price, currency) }</p>
      </div>
      <button type="button" className="card-button-pro">{ button_text }</button>
    </div>
  )
}

export default CardProductPro
