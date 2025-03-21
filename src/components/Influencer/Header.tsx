import React, { useState } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import { currentLang  } from 'src/store';
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
      code: 'ja',
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
  const getCurrentLang = currentLang.get();
  const getCurrentLangName = langs.filter(item => item.code === 'en')[0].name;
  const [lang, setLang] = useState<LangProps>({code: getCurrentLang, name: getCurrentLangName});
  const onHandleSelect = (item: LangProps) => {
    setLang(item);
    currentLang.set(lang.code);
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
