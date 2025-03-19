import React from 'react';
import './Header.css';

interface Props {
  title: string;
  description: string;
}

const Header: React.FC<Props> = ({ title, description }) => {

  return (
    <div className="header-bg">
      <h1 className="header-title">{title}</h1>
      <h2 className="header-desc">{description}</h2>
    </div>    
  )
}

export default Header;
