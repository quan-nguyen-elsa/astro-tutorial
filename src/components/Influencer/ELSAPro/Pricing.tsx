import React from 'react';
import ProductListPro from "@components/Product/ProductListPro";
import type { WebsiteInfo } from 'src/interfaces/influencer';
import './Pricing.css';

type PaywallProps = {
  paywall: WebsiteInfo;
};

const Pricing: React.FC<PaywallProps> = (props) => {
  const { paywall } = props;

  return (
    <section className="section-pricing">
      <div className="container">
        <ProductListPro paywall={paywall} />
      </div>
    </section>
  )
};
export default Pricing;
