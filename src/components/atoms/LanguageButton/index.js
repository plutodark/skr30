import React from 'react';
import { withRouter } from 'react-router';
import { ButtonGroup, Button } from 'react-bootstrap';
import { assign } from 'lodash';
import qs from 'query-string';
import history from 'history';

const LanguageButton = (props) => {
  const { location } = props;
  const updateLanguage = (locale) => {
    const { pathname } = location;
    const parsed = qs.parse(location.search);
    assign(parsed, { locale });
    const stringified = qs.stringify(parsed);
    history.push(`${pathname}?${stringified}`);
  };
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <ButtonGroup>
        <Button variant='primary' onClick={() => updateLanguage('en')}>EN</Button>
        <Button variant='primary' onClick={() => updateLanguage('tc')}>中</Button>
      </ButtonGroup>
    </div>
  );
};

export default withRouter(LanguageButton);
