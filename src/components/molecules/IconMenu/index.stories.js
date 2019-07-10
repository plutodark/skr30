import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconMenu from './';

const commands = [{
  icon: 'account_box',
  onClick: () => console.log('haha'),
  label: 'haha',
}, {
  icons: 'announcement',
  onClick: () => console.log('announcement'),
  label: 'announcement',
}];
storiesOf('IconMenu', module)
  .add('default', () => (
    <div style={{display: 'flex', justifyContent: 'flex-end' }}>
      <IconMenu
        commands={commands}
        onClick={action('clicked')}
      />
    </div>
  ));
