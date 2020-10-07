import React from 'react';

export const Splash: React.FC = ({ hero, title, description }) => {
  return (
    <div>
      <img src={hero} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
