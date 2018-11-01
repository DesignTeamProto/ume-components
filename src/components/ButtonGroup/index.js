import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonGroupStyled = styled.div`
  button {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const ButtonGroup = ({ children }) => (
  <ButtonGroupStyled>
    {children}
  </ButtonGroupStyled>
);

ButtonGroup.propTypes = {
  /** This will contain content for the button group */
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
