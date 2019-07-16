import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Input from './';

const tags = [
  {
    label: 'hihi',
    icon: 'place',
  }, {
    label: 'haha',
    icon: 'looks_one',
  }
];
const suggestions = [
  {
    label: 'ABC',
    icon: 'place',
  }, {
    label: 'EFG',
    icon: 'looks_one',
  }, {
    label: 'Empty icon'
  }
];
storiesOf('Input', module)
  .add('default', () => (
    <Input
      handleEvent={console.log}
      placeholder={'Enter something'}
      tags={tags}
      suggestions={suggestions}
      isAutoComplete
    />
  ))
  .add('no tags', () => (
    <Input
      handleEvent={console.log}
      placeholder={'Enter something'}
    />
  ));
