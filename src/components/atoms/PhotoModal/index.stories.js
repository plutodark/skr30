import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PhotoModal from './';
const photo = {
  id: '5cf91c5c456b1a2e757e2979',
  thumbnail: 'https://skr30-photo-uploads-dev.s3-ap-southeast-1.amazonaws.com/public/2019/thumbnail/31d61621-d77b-4eef-945c-aa368d108d51/5a20f540-8863-11e9-90f9-679e4b430ca9.png',
  watermark: 'https://skr30-photo-uploads-dev.s3-ap-southeast-1.amazonaws.com/public/2019/watermark/31d61621-d77b-4eef-945c-aa368d108d51/5a20f540-8863-11e9-90f9-679e4b430ca9.png',
  original: 'https://skr30-photo-uploads-dev.s3-ap-southeast-1.amazonaws.com/public/2019/original/31d61621-d77b-4eef-945c-aa368d108d51/5a20f540-8863-11e9-90f9-679e4b430ca9.jpeg',
  owner: '31d61621-d77b-4eef-945c-aa368d108d51',
  downloadedCount: 0,
  sharedFBCount: 0,
  sharedInstagramCount: 0,
  created: '1559829596518',
  modified: '1559829597689',
  fileKey: '5a20f540-8863-11e9-90f9-679e4b430ca9',
  place: null,
  bib: [],
  __typename: 'Photo'
};
storiesOf('PhotoModal', module)
  .add('default', () => (
    <PhotoModal
      isOpen
      photo={photo}
      onClose={action('close')}
    />
  ));
