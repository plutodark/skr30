import { find, get, isEmpty, isNil } from 'lodash';
import {
  UPDATE_ITEM_VALUE,
  SELECT_ITEM,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_ASSETS,
  RECEIVE_ASSETS,
  RECEIVE_ITEM,
  INVALIDATE_SUBREDDIT,
} from './actionTypes';
import store from './';

const dispatch = (props) => store.dispatch(props);
const requestPosts = (subreddit) => dispatch({
  type: REQUEST_POSTS,
  subreddit,
});
const requestAssets = (subreddit) => dispatch({
  type: REQUEST_ASSETS,
  subreddit,
});
const receivePosts = ({ subreddit, data }) => dispatch({
  type: RECEIVE_POSTS,
  subreddit,
  data,
  lastUpdated: new Date(),
});
const receiveAssets = ({ subreddit, data }) => dispatch({
  type: RECEIVE_ASSETS,
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
  const lastUpdated = get(posts, 'lastUpdated', null);
  if(isNil(lastUpdated)) {
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
const fetchAssets = (subreddit, fetchFunc) => {
  requestAssets(subreddit);
  return fetchFunc()
    .then(data => receiveAssets({ subreddit, data }));
};
const fetchItem = (subreddit, fetchFunc) => {
  return fetchFunc()
    .then(data => receiveItem({ subreddit, data }));
};
const fetchPostsIfNeeded = (subreddit, fetchFunc) => {
  return shouldFetchPosts(store.getState().Entities, subreddit) ? fetchPosts(subreddit, fetchFunc) : Promise.resolve();
};
const fetchAssetsIfNeeded = (subreddit, fetchFunc) => {
  return shouldFetchPosts(store.getState().Entities, subreddit) ? fetchAssets(subreddit, fetchFunc) : Promise.resolve();
};
const fetchItemIfNeeded = ({ subreddit, id, fetchFunc }) => {
  return shouldFetchItem({ state: store.getState().Entities, subreddit, id }) ? fetchItem(subreddit, fetchFunc) : Promise.resolve();
};

export default {
  requestPosts,
  receivePosts,
  invalidateSubreddit,
  fetchPostsIfNeeded,
  fetchAssetsIfNeeded,
  fetchItemIfNeeded,
  updateItemValue,
  selectItem,
};
