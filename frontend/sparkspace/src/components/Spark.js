import React from 'react';

const Spark = ({key, imageUrl, title,description}) => {
  return (
    <div className="spark">
      <img src={imageUrl} alt={title} />
      {title && <p>{title}</p>}
    </div>
  );
};

export default Spark;
