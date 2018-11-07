import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

require('./Component.scss');

/* if needed, use styled components */
const StyledElement = styled('div')`
  background-color: green;
`;

const Button = ({ qaLabel, accessibilityLabel }) => {
  const dataProps = { 'data-qa': qaLabel };
  const ariaProps = { 'aria-label': accessibilityLabel };
  return (
    <StyledElement {...dataProps} {...ariaProps} />
  );
};

Button.propTypes = {
  /** Label for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** Quality assurance tag for testing purposes */
  qaLabel: PropTypes.string,
};

export default Button;
