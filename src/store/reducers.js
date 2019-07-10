import {
  assign,
  get,
  chain,
  // concat,
  // value,
  // uniqBy,
} from 'lodash';
import {
  INVALIDATE_SUBREDDIT,
  RECEIVE_POSTS,
  REQUEST_POSTS,
} from './actionTypes';
import initialState from './initialState';

const posts = (state = initialState, action) => {
  const { type, data, lastUpdated } = action;
  switch (type) {
    case INVALIDATE_SUBREDDIT:
      return assign({}, state, { didInvalidate: true });
    case REQUEST_POSTS:
      return assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_POSTS: {
      const { items, page, hasPrevPage, hasNextPage, limit, totalDocs, totalPages } = data;
      const oldItems = get(state, 'items', []);
      const newItems = chain(items)
        .concat(oldItems)
        .compact()
        .uniqBy('id')
        .sortBy(o => parseInt(o.created, 10))
        .reverse()
        .value();
      const object = {
        isFetching: false,
        didInvalidate: false,
        items: newItems,
        lastUpdated,
        page: parseInt(page, 10),
        hasPrevPage,
        hasNextPage,
        limit: parseInt(limit, 10),
        totalDocs: parseInt(totalDocs, 10),
        totalPages: parseInt(totalPages, 10),
      };
      return assign({}, state, object);
    }
    default:
      return state;
  }
};
const postsBySubreddit = (state = {}, action) => {
  const { type, subreddit } = action;
  switch (type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return assign({}, state, { [subreddit]: posts(state[subreddit], action) });
    default:
      return state;
  }
};
export default postsBySubreddit;
