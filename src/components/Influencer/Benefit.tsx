import React from 'react'
import { STRAPI_URL } from '../../constains';
import './Benefit.css';

interface Props {
  section: Record<string, any>;
}
const Benefit: React.FC<Props> = ({ section }) => {
  const { section_title, section_link, benefit_image, list_item } = section;

  return (
    <section className="section-benefit bg-blue-100">
      <div className="container">
        <div className="benefit-wrap">
          <div className="benefit-content">
            <h2 className="section-title">{section_title.title}</h2>
            {list_item.length && (
              <ul className="list-benefit">
                {list_item.map((item: any) => <li key={item.item}>{ item.item }</li>)}
              </ul>
            )}
            <div className="section-link">
              <a href={section_link.link} className="btn">{section_link.name}</a>
            </div>
          </div>
          {benefit_image?.url && (
            <figure className="benefit-image"><img src={STRAPI_URL + benefit_image.url} alt={section_title.section_title} /></figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
