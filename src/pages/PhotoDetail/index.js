import React, { useEffect } from 'react';
import { isEmpty, find, get } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import action from '../../store/Photos/action';
import PhotoDetail from '../../components/organisms/PhotoDetail';
import withPhotoAssets from '../../components/hoc/withPhotoAssets';

const PhotoDetailPage = (props) => {
  const {
    fetchOnePhoto,
    match,
    history,
    photos,
    addPlace,
    addBib,
    removeBib,
  } = props;
  const { id } = match.params;

  useEffect(() => {
    if (isEmpty(id)) {
      history.push('/photos');
    }
    fetchOnePhoto(id);
  }, [fetchOnePhoto, id, history]);
  const photo = find(photos, { id });
  const handleEvent = ({ command, value, id }) => {
    console.log('command', command);
    console.log('value', value);
    console.log('id', id);
    switch (command) {
      case 'selectPlace': {
        return addPlace(id, value);
      }
      case 'addBib': {
        return addBib(id, value);
      }
      case 'removeBib': {
        return removeBib(id, value);
      }
      case 'back':
        history.push('/photos');
        break;
      default:
        break;
    }
  };
  return (
    <PhotoDetail
      photo={photo}
      handleEvent={handleEvent}
    />
  );
};
const mapStateToProps = (state) => {
  const { PHOTOS } = state.Entities;
  const photos = get(PHOTOS, 'items', []);
  return {
    photos,
  };
};
const mapDispatchToProps = () => {
  const {
    addPlace,
    removePlace,
    addBib,
    removeBib,
    fetchOnePhoto,
  } = action;
  return {
    addPlace,
    removePlace,
    addBib,
    removeBib,
    fetchOnePhoto,
  };
};
export default withPhotoAssets(withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoDetailPage)));
