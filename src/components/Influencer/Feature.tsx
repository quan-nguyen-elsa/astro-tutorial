import React from 'react'
import { STRAPI_URL } from 'src/constains';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Feature.css';

interface Props {
  section: Record<string, any>;
}

interface SlideProps {
  title: string;
  sub_title: string;
  description: string;
  thumbnail: {
    url: string;
  }
  icon: {
    url: string;
  }
};

const Feature: React.FC<Props> = ({ section }) => {
  const { section_title, section_link, list_feature } = section;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="dark elsa-feature">
      <div className="container">
        <h2 className="title">{ section_title.title }</h2>
        <div className="elsa-feature__container">
          {list_feature.length && (
            <>
            <div className="embla feature-slider" ref={emblaRef}>
              <div className="embla__container">
                {list_feature.map((slide: SlideProps) => (
                  <div key={slide.title} className="embla__slide elsa-slider__item"><img src={STRAPI_URL + slide.thumbnail.url} width="320" height="1104" alt={slide.title} /></div>
                ))}
              </div>
            </div>

              <div className="feature-nav">
                <ul className="feature-nav__list js-feature-nav">
                  {list_feature.map((slide: SlideProps, index: number) => (
                    <li key={index} data-slide={index + 1} className="">
                      <div className="feature-nav__wrap">
                        <div className="feature-nav__icon feature-nav__icon--user"></div>
                        <div className="feature-nav__content">
                          <h3 className="feature-title">{slide.title}</h3>
                          <p className="feature-description">{slide.sub_title}</p>
                          <p className="feature-detail">{slide.description}</p>
                        </div>
                        <div className="feature-nav__collapse"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

        </div>
        <div className="text-center">
          <button className="btn">{section_link.name}</button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
