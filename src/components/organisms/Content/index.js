import React from 'react';
import withLocale from '../../hoc/withLocale';
import './style.scss';

const Content = (props) => {
  const {
    locale,
    isHome,
    index,
    location,
  } = props;
  const { pathname } = location;
  // redirect to 404 if not someone type wrong
  const page = index === 'home' && pathname !== '/' ? '404' : index;
  const text = require(`../../../text/${page}`).default;
  const title = text.title[locale];
  const content = text.content[locale];
  return (
    <>
      <h1 className={`pageTitle ${isHome ? 'homeTitle' : ''}`}>{title}</h1>
      <div className={isHome ? 'homeContent' : ''}>{content}</div>
    </>
  );
};

export default withLocale(Content);
