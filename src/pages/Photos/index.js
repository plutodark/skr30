import React, { useEffect } from 'react';
import {
  get,
  chain,
  partition,
  map,

  isNil,
} from 'lodash';
import { connect } from 'react-redux';
import pageAction from './action';
import action from '../../store/Photos/action';
import SearchAction from '../../store/SearchResult/action';
import withLocale from '../../components/hoc/withLocale';
import withPhotoAssets from '../../components/hoc/withPhotoAssets';
import Photos from '../../components/organisms/Photos';


//const photos = ['https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png', 'https://champsys-blueprint-assets.s3-ap-southeast-1.amazonaws.com/1553479451813-SKR30+Logo+black.png'];
const PhotosPage = (props) => {
  const {
    fetchPhotos,
    photos,
    history,
    places,
    availableBibs,
    locale,
    searchPhotos,
    invalidateSearchPhotos,
    addTag,
    removeTag,
    tags,
    setSuggestions,
    suggestions,
  } = props;
  const onPhotoOpen = (index) => {
    const { id } = photos[index];
    const link = `/photoDetail/${id}`;
    history.push(link);
  };



  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  useEffect(() => {
    const onSearchPhotos = () => {
      const [placesInTag, bibObjs] =  partition(tags, { icon: 'place' });
      const place = placesInTag.length > 0 ? chain(places)
        .find(o => o.en === placesInTag[0].label || o.tc === placesInTag[0].label)
        .get('id', '')
        .value() : '';
      const bibs = map(bibObjs, o => o.label);
      searchPhotos({ place, bibs });
    };
    invalidateSearchPhotos();
    if (tags.length !== 0) {
      onSearchPhotos();
    }
    // searchPhotos();
    // invalidateSearchPhotos,
  }, [tags, invalidateSearchPhotos, places,searchPhotos]);
  const handleEvent = ({ command, value }) => {
    console.log('command', command);
    console.log('value', value);
    switch (command) {
      case 'autoComplete':
        return setSuggestions({ value, places, availableBibs, locale });
      case 'enter':
        return addTag({value, places, availableBibs, locale });
      case 'removeTag':
        return removeTag(value);
      default:
        break;
    }
  };
  return (
    <Photos
      {...props}
      handleEvent={handleEvent}
      onPhotoOpen={onPhotoOpen}
      suggestions={suggestions}
      tags={tags}
    />
  );
};

const mapStateToProps = (state) => {
  const result = isNil(get(state, 'Entities.SEARCHRESULT.items', [])) ? get(state, 'Entities.PHOTOS') : get(state, 'Entities.SEARCHRESULT', []);
  const photos = get(result, 'items', []);
  const hasNext = get(result, 'hasNext', false);
  const page = get(result, 'page', 0);
  const tags = get(state, 'PhotoPage.tags', []);
  const suggestions = get(state, 'PhotoPage.suggestions', []);
  return {
    photos,
    hasNext,
    page,
    tags,
    suggestions,
  };
};
const mapDispatchToProps = (dispatch) => {
  const {
    fetchPhotos,
  } = action;
  const { addTag, removeTag, setSuggestions } = pageAction;
  const {
    searchPhotos,
    invalidateSearchPhotos,
  } = SearchAction;
  return {
    addTag,
    removeTag,
    setSuggestions,
    fetchPhotos,
    searchPhotos,
    invalidateSearchPhotos,
  };
};

export default withPhotoAssets(withLocale(connect(mapStateToProps, mapDispatchToProps)(PhotosPage)));
