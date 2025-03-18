import React, { useState } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import './Header.css';

interface LangProps {
  code: string;
  name: string;
}

const Header: React.FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const langs: LangProps[] = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'jp',
      name: '日本語'
    },
    {
      code: 'es',
      name: 'Español'
    },
    {
      code: 'th',
      name: 'ภาษาไทย',
    },
    {
      code: 'pt',
      name: 'Português'
    }
  ];
  const [lang, setLang] = useState<LangProps>({code: 'en', name: 'English'});

  const onHandleSelect = (item: LangProps) => {
    setLang(item);
    setIsComponentVisible(false);
  };

  return (
    <header className="inf-header">
      <div className="lang-dropdown" ref={ref}>
        <button className="dropdown-btn" onClick={() => setIsComponentVisible(!isComponentVisible)}>{ lang.name }</button>
        {isComponentVisible && (
          <ul className="lang-switcher">
            {langs.map(item => <li key={item.code} onClick={() => onHandleSelect(item)}>{ item.name }</li>)}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
