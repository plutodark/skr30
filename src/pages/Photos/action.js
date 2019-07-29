import {
  ADD_TAG,
  REMOVE_TAG,
  SET_SUGGESTION,
} from './actionTypes';
import store from '../../store';
const addTag = ({ value, places, availableBibs, locale }) => store.dispatch({
    type: ADD_TAG,
    value,
    places,
    availableBibs,
    locale,
});
const removeTag = (value) => store.dispatch({
  type: REMOVE_TAG,
  value,
});
const setSuggestions = ({ value, places, availableBibs, locale }) => store.dispatch({
  type: SET_SUGGESTION,
  value,
  places,
  availableBibs,
  locale,
});
export default {
  addTag,
  removeTag,
  setSuggestions,
};
