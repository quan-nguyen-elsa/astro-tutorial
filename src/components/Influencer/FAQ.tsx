import React from 'react'

interface Props {
  section_title: Record<string, any>;
  link_button: Record<string, any>;
}
const FAQ: React.FC<Props> = ({ section_title, link_button }) => {
  return (
    <section className="section-faq bg-yellow-200">
      <h2 className="section-title">{section_title.section_title}</h2>
      { link_button && (
        <div className="section-link">
          <a href={link_button.link} className="btn">{link_button.name}</a>
        </div>
      )}
    </section>
  );
};

export default FAQ;
