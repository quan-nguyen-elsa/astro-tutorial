import React from 'react'
import CardProductPro from './CardProductPro'
import type { WebsiteInfo } from 'src/interfaces/influencer';

type Props = {
  paywall: WebsiteInfo;
};

const ProductList : React.FC<Props> = ({ paywall } : Props ) => {
  return (
    <div className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-list">
          {paywall && paywall.catalogs[0]?.variants.map(variant => 
            <div className={'pricing-box' + (variant.interface.is_featured ? ' pricing-box--featured' : '')}>
              <CardProductPro
                key={variant.code}
                title={variant.interface.package_name}
                base_price={variant.base_price}
                discount_price={variant.price}
                discount_percent={variant.discount_percent}
                button_text={variant.interface.button_text}
                currency={variant.currency}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
