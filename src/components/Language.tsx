import React, { useState } from 'react';
import useComponentVisible from '../hooks/useComponentVisible';
import './Header.css';

interface LangProps {
  code: string;
  name: string;
}

interface Props {
  langCode: string;
}

const Language: React.FC<Props> = ({ langCode }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const langs: LangProps[] = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'vi',
      name: 'Tiếng Việt'
    }
  ];
  const getCurrentLangName = langs.filter(item => item.code === langCode)[0].name;
  const [lang, setLang] = useState<LangProps>({code: langCode, name: getCurrentLangName});
  
  const onHandleSelect = (item: LangProps) => {
    setLang(item);
    setIsComponentVisible(false);
    location.href = `/${item.code}/blog`
  };

  return (
    <div className="lang-dropdown" ref={ref}>
      <button className="dropdown-btn" onClick={() => setIsComponentVisible(!isComponentVisible)}>{ lang.name }</button>
      {isComponentVisible && (
        <ul className="lang-switcher">
          {langs.map(item => <li key={item.code} onClick={() => onHandleSelect(item)}>{ item.name }</li>)}
        </ul>
      )}
    </div>
  );
};

export default Language;
