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
      <Splash
        hero={skeletor}
        title='skeletor-ui'
        description='A bare-bones component library'
      />
    </PreviewWrapper>
  );
};
