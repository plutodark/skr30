import {
  cloneDeep,
  reduce,
  chain,
  concat,
  isEmpty,
  filter,
  assign,
} from 'lodash';
import {
  ADD_TAG,
  REMOVE_TAG,
  SET_SUGGESTION,
} from './actionTypes';

const initialState = {
  tags: [],
  suggestions: [],
};

const search = ({ places, availableBibs, tags, locale, value }) => {
  const isDuplicate = reduce(tags, (result, obj) => {
    return value === obj.label ? true : result;
  }, false);
  if (isDuplicate) {
    return [];
  }
  const placeSuggestion = chain(places)
  .filter(obj => {
    return obj.en.toLowerCase().includes(value.toLowerCase()) || obj.tc.toLowerCase().includes(value.toLowerCase())
  })
  .map(obj => {
    return {
      icon: 'place',
      label: obj[locale]
    };
  })
  .value();
  const bibSuggestions = chain(availableBibs)
    .filter(obj => obj.toLowerCase().includes(value.toLowerCase()))
    .map(obj => ({
      icon: 'looks_one',
      label: obj
    }))
    .value();
    return concat(placeSuggestion, bibSuggestions);
};
const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case ADD_TAG: {
      const { places, availableBibs, locale } = action;
      const tags = cloneDeep(state.tags);
      const searchResult = search({ places, availableBibs, tags, locale, value });
      if (isEmpty(searchResult)) {
        return state;
      }
      const newTags = searchResult[0].icon === 'place' ? filter(tags, o => o.icon !== 'place') : tags;
      return assign({}, state, { tags: concat(newTags, searchResult[0]) });
    }
    case REMOVE_TAG: {
      const newTags = cloneDeep(state.tags);
      newTags.splice(value, 1);
      return assign({}, state, { tags: newTags });
    }
    case SET_SUGGESTION: {
      const { places, availableBibs, locale } = action;
      const { tags } = state;
      const suggestions = search({ places, availableBibs, tags, locale, value });
      return assign({}, state, { suggestions });
    }
    default:
      return state;
  }
};
export default reducer;
