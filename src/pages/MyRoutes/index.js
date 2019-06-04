import React from 'react';
import { Switch, Route } from 'react-router';
import { reduceRight, concat } from 'lodash';
import Content from '../../components/organisms/Content';
import contents from '../../text/menu';

const MyRoutesPage = (props) => {
  return (
    <Switch>
      {reduceRight(contents,(result, content, index) => {
        const path = `/${content.href}`;
        const ele = (
          <Route
            key={index}
            path={path}
            render={() => <Content index={index} />}
          />
        );
        return concat(result, ele);
      }, [])}
    </Switch>
  );
};
export default MyRoutesPage;
