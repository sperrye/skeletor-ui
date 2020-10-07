import React, { ReactChild } from 'react';

interface Props {
  hero?: string;
  altText?: string;
  title?: string;
  description?: string;
  children?: ReactChild;
}

export const Splash: React.FC<Props> = ({ ...props }: Props) => {
  const { hero, altText, title, description, children } = props;
  return (
    <div>
      <img src={hero} alt={altText} />
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
};

Splash.defaultProps = {
  hero: '',
  altText: '',
  title: '',
  description: '',
  children: null,
};
