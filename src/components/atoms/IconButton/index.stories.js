import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconButton from './';

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton
      icon={'close'}
      onClick={action('clicked')}
    />
  ));
