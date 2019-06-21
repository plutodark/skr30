import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HamburgerButton from './';

storiesOf('HamburgerButton', module)
  .add('default', () => (
    <HamburgerButton
      onClick={action('clicked')}
    />
  ));
