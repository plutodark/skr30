import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import action from '../../store/Photos/action';
import withLocale from '../../components/hoc/withLocale';
import Photos from '../../components/organisms/Photos';
import PhotoDetail from '../../components/organisms/PhotoDetail';

//const photos = ['https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png', 'https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png'];
const PhotosPage = (props) => {
  const {
    fetchPhotos,
    photos,
  } = props;
  const [isPhotoOpen, setPhotoOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const onPhotoOpen = (index) => {
    setPhotoIndex(index);
    setPhotoOpen(true);
  };
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return isPhotoOpen ? (
    <PhotoDetail
      {...props}
      photo={photos[photoIndex]}
      setPhotoOpen={setPhotoOpen}
    />
  ) : (
    <Photos
      {...props}
      onPhotoOpen={onPhotoOpen}
    />
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

export default withLocale(connect(mapStateToProps, mapDispatchToProps)(PhotosPage));
