import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TagPlacePopup from './';

storiesOf('TagPlacePopup', module)
  .add('default', () => (
    <TagPlacePopup
      isOpen
      onClose={() => action('close')}
      places={['Tai Tam', 'meow meow']}
      handleEvent={action}
      selectedPlace={'Tai Tam'}
    />
  ));
