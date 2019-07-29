import { gql } from 'apollo-boost';
import actions from '../actions';
import { client } from '../../gql';

const subreddit = 'SEARCHRESULT';

const searchPhotoQuery = gql`
  query searchPhotos($place: String, $bibs: [String], $limit: Int, $page: Int){
    searchPhotos (place: $place, bibs: $bibs, limit: $limit, page: $page) {
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

const searchPhotos = ({ place, bibs, page = 1 }) => {
  const fetchFunc = () => client.query({ query: searchPhotoQuery, variables: { limit: 8, page, bibs, place } }).then((response) => {
    return response.data.searchPhotos;
  });
  return actions.fetchPostsIfNeeded(subreddit, fetchFunc);
};
const invalidateSearchPhotos = () => {
  return actions.invalidateSubreddit(subreddit);
};
export default {
  searchPhotos,
  invalidateSearchPhotos,
};
