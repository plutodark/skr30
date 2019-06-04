import React from 'react';
import { withRouter } from 'react-router';
import qs from 'query-string';

const withLocale = (WrappedComponent) => {
  const localeDetector = (props) => {
    const { location } = props;
    const { locale = 'en' } = qs.parse(location.search);
    console.log('locale', locale);
    const isHome = location.pathname === '/';
    return (
      <WrappedComponent
        {...props}
        locale={locale}
        isHome={isHome}
      />
    );
  };
  return withRouter(localeDetector);
};

export default withLocale;
