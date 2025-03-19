import React from 'react'
import { STRAPI_URL } from 'src/constains';
import './Feedback.css'

interface Props {
  section: Record<string, any>;
};

interface FeedbackProps {
  comment: string;
  commenter: string;
  commenter_avatar: {
    url: string;
  };
  commenter_job: string;
};

const FAQ: React.FC<Props> = ({ section }) => {
  const { section_title, feedback } = section;
  return (
    <section className="section-feedback">
      <div className="container">
        <h2 className="section-title">{section_title.title}</h2>
        {feedback.length && (
          <div className="feedback-list">
            {feedback.map((item: FeedbackProps) => (
              <div className="feedback-item" key={item.commenter}>
                <div className="comment-top">
                  <span className="icon-quote"><img loading="lazy" width="64" height="64" alt="" src="https://d1t11jpd823i7r.cloudfront.net/influencer/d-quote.svg" className="double-quote" /></span>
                  <p className="description">{item.comment}</p>
                </div>
                <div className="comment-bot">
                  <figure className="profile-image"><img loading="lazy" decoding="async" width="55" height="55" alt={item.commenter} src={STRAPI_URL + item.commenter_avatar.url} className="avatar" /></figure>
                  <p className="name">{item.commenter}</p>
                  <p className="desig">{item.commenter_job}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
