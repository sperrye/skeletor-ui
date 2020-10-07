import React from 'react';

import skeletor from '../img/skeletor.jpg';
import { Splash } from '.';

export default {
  title: 'Splash',
  component: Splash,
  decorators: [
    (Story: React.FC): React.ReactNode => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const Default: React.FC = () => {
  const PreviewWrapper = ({ children }) => {
    return children;
  };

  return (
    <PreviewWrapper>
      <h3>Default</h3>
      <Splash />
    </PreviewWrapper>
  );
};

export const WithProps: React.FC = () => {
  const PreviewWrapper = ({ children }) => {
    return children;
  };

  return (
    <PreviewWrapper>
      <h3>With props</h3>
      <Splash
        hero={skeletor}
        altText="skeletor cuddling kittens because soft"
        title="skeletor-ui"
        description="A bare-bones component library"
      >
        <span role="img" aria-label="three cat emojis">
          🐈🐈🐈
        </span>
      </Splash>
    </PreviewWrapper>
  );
};
