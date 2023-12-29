import React from 'react'
import './nav.css';
export default function NavButton({name, onClick, isActive}) {
  const buttonClass = `navBarButton ${isActive ? 'navBarButtonActive' : ''}`;

  return (
    <div className={buttonClass} onClick={() => onClick(name)}>
      {name}
    </div>
  );
}
