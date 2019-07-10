import React, { useEffect, useState } from 'react';
import { map, get } from 'lodash';
import { connect } from 'react-redux';
import action from '../../../store/Photos/action';
import withLocale from '../../hoc/withLocale';
import PhotoButton from '../../atoms/PhotoButton';
import PhotoModal from '../../atoms/PhotoModal';
import IconButton from '../../atoms/IconButton';
import './style.scss'
//const photos = ['https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png', 'https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png'];
const Photos = (props) => {
  const {
    photos,
    dictionary,
    fetchPhotos,
    hasNextPage,
    page,
  } = props;
  const [isPhotoModalOpen, setPhotoModalOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const onPhotoOpen = (index) => {
    setPhotoIndex(index);
    setPhotoModalOpen(true);
  };
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);
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
  const renderPhotoModal = () => (
    <PhotoModal
      isOpen={isPhotoModalOpen}
      onClose={() => setPhotoModalOpen(false)}
      photo={get(photos, [photoIndex], {})}
    />
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
  return (
    <div>
      {photos ? renderPhotos() : renderEmptyPhotos()}
      {renderPhotoModal()}
      {hasNextPage && renderMoreButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { PHOTOS } = state.Entities;
  const photos = get(PHOTOS, 'items', []);
  const hasNextPage = get(PHOTOS, 'hasNextPage', false);
  const page = get(PHOTOS, 'page', 0);
  return {
    photos,
    hasNextPage,
    page,
  };
};
const mapDispatchToProps = () => {
  const { fetchPhotos } = action;
  return {
    fetchPhotos,
  };
};

export default withLocale(connect(mapStateToProps, mapDispatchToProps)(Photos));
