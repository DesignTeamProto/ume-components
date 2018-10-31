import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as BaseButton } from '@material/react-button/dist'; // /index.js is implied

const StyledButton = styled(BaseButton)`
  border-radius: 2px;
`;

const Button = (props, { qaTag, accessibilityLabel }) => {
  const dataProps = { 'data-qa': qaTag, 'data-foo': 'button' };
  const ariaProps = { 'aria-label': accessibilityLabel };
  return (
    <StyledButton {...props} {...dataProps} {...ariaProps} />
  );
};

Button.propTypes = {
  /** Label for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** Quality assurance tag for testing purposes */
  qaTag: PropTypes.string,
};

export default Button;
