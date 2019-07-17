import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TagBibPopup from './';

storiesOf('TagBibPopup', module)
  .add('default', () => (
    <TagBibPopup
      isOpen
      onClose={() => action('close')}
      bibs={['B0001', '1231']}
      handleEvent={console.log}
    />
  ));
