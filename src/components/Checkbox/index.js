import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseCheckbox from '@material/react-checkbox';
import './Checkbox.scss';

const StyledCheckbox = styled(BaseCheckbox)`
  border-radius: 2px;
`;

const Checkbox = (props, { qaLabel, accessibilityLabel }) => {
  const dataProps = { 'data-qa': qaLabel };
  const ariaProps = { 'aria-label': accessibilityLabel };
  return (
    <StyledCheckbox {...props} {...dataProps} {...ariaProps} />
  );
};

Checkbox.propTypes = {
  /** Label for accessibility purposes */
  accessibilityLabel: PropTypes.string,

  /** Quality assurance tag for testing purposes */
  qaLabel: PropTypes.string,
};

export default Checkbox;
