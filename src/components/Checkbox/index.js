import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checkbox as BaseCheckbox } from '@material/react-checkbox/dist'; // /index.js is implied

const StyledCheckbox = styled(BaseCheckbox)`
  border-radius: 2px;
`;

const Checkbox = (props, { qaTag, accessibilityLabel }) => {
  const dataProps = { 'data-qa': qaTag, 'data-foo': 'Checkbox' };
  const ariaProps = { 'aria-label': accessibilityLabel };
  return (
    <StyledCheckbox {...props} {...dataProps} {...ariaProps} />
  );
};

Checkbox.propTypes = {
  /** Label for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** Quality assurance tag for testing purposes */
  qaTag: PropTypes.string,
};

export default Checkbox;
