import PropTypes from 'prop-types';
import qs from 'query-string';
import { get, isEmpty } from 'lodash';

const TranslatableText = (props) => {
  const { dictionary, location } = props;
  const defaultLanguage = 'en';
  if (!isEmpty(location)) {
    const locale = get(qs.parse(location.search), 'locale', defaultLanguage);
    return dictionary[locale];
  }
  return dictionary[defaultLanguage];
};

TranslatableText.defaultProps = {
  dictionary: null,
};
TranslatableText.propTypes = {
  dictionary: PropTypes.object,
};

export default TranslatableText;
