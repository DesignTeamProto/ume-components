import React from 'react';
import PropTypes from 'prop-types';
import BaseFab from '@material/react-fab';
import './Fab.scss';

const Fab = (props, { qaLabel, accessibilityLabel }) => {
  const dataProps = { 'data-qa': qaLabel };
  const ariaProps = { 'aria-label': accessibilityLabel };
  return (
    <BaseFab {...props} {...dataProps} {...ariaProps} />
  );
};

Fab.propTypes = {
  /** Label for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** Quality assurance tag for testing purposes */
  qaLabel: PropTypes.string,
};

export default Fab;
