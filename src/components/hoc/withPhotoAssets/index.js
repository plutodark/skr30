import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import action from '../../../store/Assets/action';

const withPhotoAssets = (WrappedComponent) => {
  const PhotoAssets = (props) => {
    const {
      fetchPlaces,
      fetchBibs,
    } = props;
    useEffect(() => {
      fetchPlaces();
      fetchBibs();
    }, [fetchPlaces, fetchBibs]);
    return (
      <WrappedComponent
        {...props}
      />
    );
  };
  const mapStateToProps = (state) => {
    const places = get(state, 'Entities.PLACES.items', []);
    const availableBibs = get(state, 'Entities.BIBS.items', []);
    return {
      places,
      availableBibs,
    };
  };
  const mapDispatchToProps= () => {
    const {
      fetchPlaces,
      fetchBibs,
    } = action;
    return {
      fetchPlaces,
      fetchBibs,
    };
  };
  return connect(mapStateToProps, mapDispatchToProps)(PhotoAssets);
};

export default withPhotoAssets;
