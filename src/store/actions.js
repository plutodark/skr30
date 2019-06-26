import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  INVALIDATE_SUBREDDIT,
} from './actionTypes';
import store from './';

const dispatch = (props) => store.dispatch(props);
const requestPosts = (subreddit) => dispatch({
  type: REQUEST_POSTS,
  subreddit,
});

const receivePosts = ({ subreddit, data }) => dispatch({
  type: RECEIVE_POSTS,
  subreddit,
  data,
  lastUpdated: new Date(),
});
const invalidateSubreddit = (subreddit) => dispatch({
  type: INVALIDATE_SUBREDDIT,
  subreddit,
});
const shouldFetchPosts = (state, subreddit) => {
  const posts = state[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
};
const fetchPosts = (subreddit, fetchFunc) => {
  requestPosts(subreddit);
  return fetchFunc()
    .then(data => receivePosts({ subreddit, data }));
};

const fetchPostsIfNeeded = (subreddit, fetchFunc) => {
    return shouldFetchPosts(store.getState(), subreddit) ? fetchPosts(subreddit, fetchFunc) : Promise.resolve();
};

export default {
  requestPosts,
  receivePosts,
  invalidateSubreddit,
  fetchPostsIfNeeded,
};
