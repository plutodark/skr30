import React from 'react';
import { Route } from 'react-router';
import { map } from 'lodash';
import Page from '../Page';
import contents from '../../text/menu';

const MyRoutesPage = (props) => {
  return map(contents,(content, index) => {
    const path = `/${content.href}`;
    return (
      <Route
        key={index}
        path={path}
        render={() => <Page index={index} />}
      />
    );
  });

};
export default MyRoutesPage;
