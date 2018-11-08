import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseButton from '@material/react-button';
import './Button.scss';

const StyledButton = styled(BaseButton)`
  border-radius: 2px;
`;

const Button = (props, { qaLabel, accessibilityLabel }) => {
  const dataProps = { 'data-qa': qaLabel };
  const ariaProps = { 'aria-label': accessibilityLabel };
  return (
    <StyledButton {...props} {...dataProps} {...ariaProps} />
  );
};

Button.propTypes = {
  /** Label for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** Quality assurance tag for testing purposes */
  qaLabel: PropTypes.string,
};

export default Button;
