import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
  const {
    index,
  } = props;
  console.log('index', index);
  return (
    <div>
      {'page'}
    </div>
  );
};
Page.defaultProps = {
  index: 'index',
};
Page.propTypes = {
  index: PropTypes.string,
};
export default Page;
