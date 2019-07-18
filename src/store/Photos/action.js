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

const getOnePhotoQuery = gql`
  query getOnePhoto($id: String!){
    getOnePhoto (id: $id) {
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
  }
`;
const addPlaceQuery = gql`
  mutation addPlace ($id: String!, $place: String!) {
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
  mutation removePlace ($id: String!) {
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
  mutation addBib ($id: String!, $bibNumber: String!) {
    addBib (id: $id, bibNumber: $bibNumber) {
      success
      item {
        id
        bib
      }
    }
  }
`;

const removeBibQuery = gql`
  mutation removeBib ($id: String!, $bibNumber: String!) {
    removeBib (id: $id, bibNumber: $bibNumber) {
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
const fetchOnePhoto = (id) => {
  const fetchFunc = () => client.query({ query: getOnePhotoQuery, variables: { id }}).then(response => (response.data.getOnePhoto));
  return actions.fetchItemIfNeeded({ subreddit, id, fetchFunc });
};

const addPlace = (id, place) => {
  const fetchFunc = () => client.mutate({ mutation: addPlaceQuery, variables: { id, place }}).then(response => {
    return response.data.addPlace.item.place;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'place', value }));
};
const removePlace = (id) => {
  const fetchFunc = () => client.mutate({ mutation: removePlaceQuery, variables: { id }}).then(response => {
    return response.data.removePlace.item.place;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'place', value }));
};

const addBib = (id, bibNumber) => {
  const fetchFunc = () => client.mutate({ mutation: addBibQuery, variables: { id, bibNumber }}).then(response => {
    return response.data.addBib.item.bib;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'bib', value }));
};
const removeBib = (id, bibNumber) => {
  const fetchFunc = () => client.mutate({ mutation: removeBibQuery, variables: { id, bibNumber }}).then(response => {
    return response.data.removeBib.item.bib;
  });
  fetchFunc().then((value) => actions.updateItemValue({ subreddit, id, key: 'bib', value }));
};

// const selectItem = (id) => actions.selectItem({ subreddit, id });

export default {
  fetchPhotos,
  fetchOnePhoto,
  addPlace,
  removePlace,
  addBib,
  removeBib,
  // selectItem,
};
