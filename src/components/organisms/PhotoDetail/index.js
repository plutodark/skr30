import React, { useState } from 'react';
import { get } from 'lodash';

import IconButton from '../../atoms/IconButton';
import IconMenu from '../../molecules/IconMenu';
import TagPlacePopup from '../../molecules/TagPlacePopup';
import './style.scss'
//const photos = ['https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png', 'https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png'];
const PhotoDetail = (props) => {
  const {
    photo,
    setPhotoOpen,
  } = props;
  const [ isPlacePopupOpen, setIsPlacePopupOpen ] = useState(false);
  const renderCloseButton = () => (
    <div className={'photo-detail--close-button'}>
      <IconButton
        icon={'keyboard_arrow_left'}
        onClick={() => setPhotoOpen(false)}
      />
    </div>
  );
  const renderPhoto = () => {
    const src = get(photo, 'watermark', '');
    const id = get(photo, 'id', '');
    return (
      <div className={'photo-detail--image-container'}>
        <img src={src} alt={id} className={'photo-detail--image'} />
      </div>
    );
  };

  const renderIconMenu = () => {
    const downloadCommand = {
      label: 'download',
      icon: 'cloud_download',
      onClick: () => {
        const a = document.createElement('a');
        a.href = photo.watermark;
        a.download = photo.key;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
    };
    const tagCommand = {
      label: 'Tag place',
      icon: 'place',
      onClick: () => setIsPlacePopupOpen(true),
    };
    const tagBibCommand = {
      label: 'Tag Bib',
      icon: 'looks_one',
      onClick: () => {},
    };
    const commands = [
      downloadCommand,
      tagCommand,
      tagBibCommand
    ];
    return (
      <IconMenu
        commands={commands}
      />
    );
  };
  const renderPlacePopup = () => {
    return (
      <TagPlacePopup
        isOpen={isPlacePopupOpen}
        onClose={() => setIsPlacePopupOpen(false)}
      />
    );
  };
  return (
    <div>
      <div className={'photo-detail--top-bar'}>
        {renderCloseButton()}
        {renderIconMenu()}
      </div>
      {renderPhoto()}
      {renderPlacePopup()}
    </div>
  );
};

export default PhotoDetail;
