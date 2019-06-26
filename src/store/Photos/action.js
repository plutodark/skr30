import { gql } from 'apollo-boost';
import actions from '../actions';
import { client } from '../../gql';

const subreddit = 'PHOTOS';

const query = gql`
  query Photos($limit: Int, $page: Int){
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
const fetchPhotos = () => {
  const fetchFunc = () => client.query({ query, variables: { limit: 10, page: 1 } }).then((response) => {
    return response.data.getPhotos;
  });
  return actions.fetchPostsIfNeeded(subreddit, fetchFunc);
};

export default {
  fetchPhotos,
};
