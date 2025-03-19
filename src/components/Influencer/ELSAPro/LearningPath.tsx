import React from 'react';
import './LearningPath.css';

interface Props {
  section: Record<string, any>
};
const LearningPath: React.FC<Props> = ({ section }) => {
  const { section_title, image1, image2, description } = section;

  return (
    <section className="section-learning-path">
      <div className="container">
        <h2 className="section-title">{section_title.title}</h2>
        <p className="description">{description}</p>
        <div className="images"><img src={image1} alt="" /><br /><img src={image2} alt="" /></div>
      </div>
    </section>
  )
};

export default LearningPath;

