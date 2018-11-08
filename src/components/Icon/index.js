import React from 'react';
import PropTypes from 'prop-types';
import BaseMaterialIcon from '@material/react-material-icon';
import './Icon.scss';

const Icon = (props, { qaLabel, accessibilityLabel }) => {
  const dataProps = { 'data-qa': qaLabel };
  const ariaProps = { 'aria-label': accessibilityLabel };
  return (
    <BaseMaterialIcon {...props} {...dataProps} {...ariaProps} />
  );
};

Icon.propTypes = {
  /** Label for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** Quality assurance tag for testing purposes */
  qaLabel: PropTypes.string,
};

export default Icon;
