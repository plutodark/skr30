import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PhotoButton from './';

storiesOf('PhotoButton', module)
  .add('default', () => (
    <PhotoButton
      src={'https://custom.champ-sys.com/Image/Product/Performance Tri Suit.jpg'}
      onClick={action('clicked')}
    />
  ));
