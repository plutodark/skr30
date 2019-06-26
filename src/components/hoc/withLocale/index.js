import React from 'react';
import { withRouter } from 'react-router';
import qs from 'query-string';
import getDictionary from '../../../text/dictionary';

const withLocale = (WrappedComponent) => {
  const localeDetector = (props) => {
    const { location } = props;
    const { locale = 'en' } = qs.parse(location.search);
    const isHome = location.pathname === '/';
    const dictionary = getDictionary(locale);
    return (
      <WrappedComponent
        {...props}
        locale={locale}
        isHome={isHome}
        dictionary={dictionary}
      />
    );
  };
  return withRouter(localeDetector);
};

export default withLocale;
