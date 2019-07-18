import { find, get, isEmpty } from 'lodash';
import {
  UPDATE_ITEM_VALUE,
  SELECT_ITEM,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_ITEM,
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
const receiveItem = ({ subreddit, data }) => dispatch({
  type: RECEIVE_ITEM,
  subreddit,
  data,
});

const selectItem = ({ subreddit, id }) => dispatch({
  type: SELECT_ITEM,
  subreddit,
  id
});

const updateItemValue = ({ subreddit, id, key, value }) => dispatch({
  type: UPDATE_ITEM_VALUE,
  subreddit,
  id,
  key,
  value,
});
const invalidateSubreddit = (subreddit) => dispatch({
  type: INVALIDATE_SUBREDDIT,
  subreddit,
});
const shouldFetchPosts = (state, subreddit) => {
  const posts = state[subreddit];
  if(isEmpty(get(posts, 'lastUpdated', null))) {
    return true;
  }
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
};
const shouldFetchItem = ({ state, subreddit, id }) => {
  const items = get(state, `[${subreddit}].items`, []);
  const item = find(items, { id });
  if (isEmpty(item)) {
    return true;
  }
  return false;
};
const fetchPosts = (subreddit, fetchFunc) => {
  requestPosts(subreddit);
  return fetchFunc()
    .then(data => receivePosts({ subreddit, data }));
};
const fetchItem = (subreddit, fetchFunc) => {
  return fetchFunc()
    .then(data => receiveItem({ subreddit, data }));
};
const fetchPostsIfNeeded = (subreddit, fetchFunc) => {
    return shouldFetchPosts(store.getState().Entities, subreddit) ? fetchPosts(subreddit, fetchFunc) : Promise.resolve();
};

const fetchItemIfNeeded = ({ subreddit, id, fetchFunc }) => {
  return shouldFetchItem({ state: store.getState().Entities, subreddit, id }) ? fetchItem(subreddit, fetchFunc) : Promise.resolve();
};

export default {
  requestPosts,
  receivePosts,
  invalidateSubreddit,
  fetchPostsIfNeeded,
  fetchItemIfNeeded,
  updateItemValue,
  selectItem,
};
