import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconButton from './';

storiesOf('IconButton', module)
  .add('without Label', () => (
    <IconButton
      icon={'close'}
      onClick={action('clicked')}
    />
  )).add('with Label', () => (
    <IconButton
      icon={'close'}
      onClick={action('clicked')}
      label={'label'}
    />
  ));
