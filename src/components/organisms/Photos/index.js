import React from 'react';
import { map, get } from 'lodash';
import PhotoButton from '../../atoms/PhotoButton';
import IconButton from '../../atoms/IconButton';
import Input from '../../atoms/Input';
import './style.scss'
//const photos = ['https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png', 'https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png'];
const Photos = (props) => {
  const {
    photos,
    dictionary,
    fetchPhotos,
    hasNext,
    onPhotoOpen,
    page,
  } = props;
  const renderEmptyPhotos = () => (
    <div>{dictionary['photo--no-photo']}</div>
  );
  const renderPhotos = () => (
    <div className={'photos--photos'}>
      {map(photos, (photo, key) => {
        const thumbnail = get(photo, 'thumbnail', '')
        return (<PhotoButton
          key={key}
          src={thumbnail}
          onClick={() => onPhotoOpen(key)}
        />)
      })}
    </div>
  );
  const renderMoreButton = () => {
    return (
      <IconButton
      className={'photos--more-button'}
        icon={'keyboard_arrow_down'}
        onClick={() => fetchPhotos(page + 1)}
        label={'more'}
      />
    );
  };
  const renderSearch = () => {
    return (
      <Input
        {...props}
        placeholder={'Enter keyword here'}
        isAutoComplete
      />
    );
  };
  const hasPhotos = !(photos === null || get(photos, 'length', 0) === 0);
  return (
    <div>
      {photos && renderSearch()}
      {hasPhotos ?  renderPhotos() : renderEmptyPhotos()}
      {hasNext && renderMoreButton()}
    </div>
  );
};

export default Photos;
