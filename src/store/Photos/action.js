import { gql } from 'apollo-boost';
import actions from '../actions';
import { client } from '../../gql';

const subreddit = 'PHOTOS';

const getPhotoQuery = gql`
  query getPhotos($limit: Int, $page: Int){
    getPhotos (limit: $limit, page: $page) {
      items {
        id
        thumbnail
        watermark
        original
        owner
        downloadedCount
        sharedFBCount
        sharedInstagramCount
        created
        modified
        fileKey
        place
        bib
      }
      page
      hasPrevPage
      hasNextPage
      limit
      totalPages
      totalDocs
    }
  }
`;

const addPlaceQuery = gql`
  mutation addPlace ($id: String, $place: String) {
    addPlace (id: $id, place: $place) {
      success
      item {
        id
        place
      }
    }
  }
`;

const removePlaceQuery = gql`
  mutation removePlace ($id: String) {
    removePlace (id: $id) {
      success
      item {
        id
        place
      }
    }
  }
`;

const addBibQuery = gql`
  mutation addBib ($id: String, $bibNumber: String) {
    addBib (id: $id) {
      success
      item {
        id
        bib
      }
    }
  }
`;

const removeBibQuery = gql`
  mutation removeBib ($id: String, $bibNumber: String) {
    removeBib (id: $id) {
      success
      item {
        id
        bib
      }
    }
  }
`;
const fetchPhotos = (page = 1) => {
  const fetchFunc = () => client.query({ query: getPhotoQuery, variables: { limit: 8, page } }).then((response) => {
    return response.data.getPhotos;
  });
  return actions.fetchPostsIfNeeded(subreddit, fetchFunc);
};

const addPlace = (id, place) => {
  const fetchFunc = () => client.query({ query: addPlaceQuery, variables: { id, place }}).then(response => {
    return response.data.addPlace.item.place;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'place', value }));
};
const removePlace = (id) => {
  const fetchFunc = () => client.query({ query: removePlaceQuery, variables: { id }}).then(response => {
    return response.data.addPlace.item.place;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'place', value }));
};

const addBib = (id, bibNumber) => {
  const fetchFunc = () => client.query({ query: addBibQuery, variables: { id, bibNumber }}).then(response => {
    return response.data.addPlace.item.bib;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'bib', value }));
};
const removeBib = (id, bibNumber) => {
  const fetchFunc = () => client.query({ query: removeBibQuery, variables: { id, bibNumber }}).then(response => {
    return response.data.addPlace.item.place;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'bib', value }));
};
export default {
  fetchPhotos,
  addPlace,
  removePlace,
  addBib,
  removeBib,
};
