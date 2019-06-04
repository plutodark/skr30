import React from 'react';
import { Route } from 'react-router';
import { map } from 'lodash';
import Content from '../../components/organisms/Content';
import contents from '../../text/menu';

const MyRoutesPage = (props) => {
  return map(contents,(content, index) => {
    const path = `/${content.href}`;
    return (
      <Route
        key={index}
        path={path}
        render={() => <Content index={index} />}
      />
    );
  });

};
export default MyRoutesPage;
