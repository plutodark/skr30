import React, { useState } from 'react';
import { get, isEmpty, map } from 'lodash';

import IconButton from '../../atoms/IconButton';
import Tag from '../../atoms/Tag';
import IconMenu from '../../molecules/IconMenu';
import TagPlacePopup from '../../molecules/TagPlacePopup';
import TagBibPopup from '../../molecules/TagBibPopup';
import './style.scss'

const PhotoDetail = (props) => {
  const {
    photo,
    handleEvent,
  } = props;
  const [ isPlacePopupOpen, setIsPlacePopupOpen ] = useState(false);
  const [ isBibPopupOpen, setIsBibPopupOpen ] = useState(false);
  const id = get(photo, 'id', '');
  const renderCloseButton = () => (
    <div className={'photo-detail--close-button'}>
      <IconButton
        icon={'keyboard_arrow_left'}
        onClick={() => handleEvent({ command: 'back' })}
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
      onClick: () => setIsBibPopupOpen(true),
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
    const selectedPlace = isEmpty(photo.place) ? 'Unknown' : photo.place;

    return (
      <TagPlacePopup
        isOpen={isPlacePopupOpen}
        onClose={() => setIsPlacePopupOpen(false)}
        places={['Pak Tam Chung', 'Wong Sek', 'Luk Wu Country Trail']}
        selectedPlace={selectedPlace}
        handleEvent={handleEvent}
        id={id}
      />
    );
  };
  const renderBibPopup = () => {
    const bibs = get(photo, 'bib', []);
    return (
      <TagBibPopup
        isOpen={isBibPopupOpen}
        onClose={() => setIsBibPopupOpen(false)}
        bibs={bibs}
        handleEvent={handleEvent}
        id={id}
      />
    );
  };
  const renderTags = () => {
    const { place, bib } = photo;
    const renderPlaceTag = () => (
      <Tag
        label={place}
        icon={'place'}
        isCloseButtonShown={false}
      />
    );
    const renderBibTag = (bibNumber, key) => (
      <Tag
        key={key}
        label={bibNumber}
        icon={'looks_one'}
        isCloseButtonShown={false}
      />
    );
    return (
      <div className={'photo-detail--tags'}>
        {!isEmpty(place) && (renderPlaceTag())}
        {map(bib, renderBibTag)}
      </div>
    );
  };
  return photo ? (
    <div>
      <div className={'photo-detail--top-bar'}>
        {renderCloseButton()}
        {renderIconMenu()}
      </div>
      {renderPhoto()}
      {renderTags()}
      {renderPlacePopup()}
      {renderBibPopup()}
    </div>
  ) : <div>{'missing'}</div>;
};

export default PhotoDetail;
