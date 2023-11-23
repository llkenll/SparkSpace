import React from 'react';

const Pin = ({ imageUrl, title }) => {
  return (
    <div className="pin">
      <img src={imageUrl} alt={title} />
      {title && <p>{title}</p>}
    </div>
  );
};

export default Pin;
