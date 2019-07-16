import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Tag from './';

const handleEvent = ({ command }) => {
  switch (command) {
    case 'close':
      // action('close');
      console.log('close');
      break;
    case 'click':
      // action('click');
      console.log('click');
      break;
    default:
      return;
  }
};

storiesOf('Tag', module)
  .add('default', () => (
    <Tag
      label={'hello'}
      handleEvent={handleEvent}
    />
  ));
