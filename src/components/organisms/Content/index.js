import React from 'react';
import withLocale from '../../hoc/withLocale';
import './style.scss';

const Content = (props) => {
  const {
    locale,
    isHome,
    index,
  } = props;
  console.log('index', index);
  const text = require(`../../../text/${index}`).default;
  const title = text.title[locale];
  const content = text.content[locale];
  console.log('text', text);
  return (
    <>
      <h1 className={`pageTitle ${isHome ? 'homeTitle' : ''}`}>{title}</h1>
      <div className={isHome ? 'homeContent' : ''}>{content}</div>
    </>
  );
};

export default withLocale(Content);
