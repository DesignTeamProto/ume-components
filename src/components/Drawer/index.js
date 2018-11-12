import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseDrawer from '@material/react-drawer';
import DrawerHeader from './Header';
import DrawerContent from './Content';
import DrawerSubtitle from './Subtitle';
import DrawerTitle from './Title';
import DrawerAppContent from './AppContent';
import './Drawer.scss';

const StyledDrawer = styled(BaseDrawer)`
  border-radius: 2px;
`;

const Drawer = () => (
  <StyledDrawer>

  </StyledDrawer>
);

export default Drawer;

export {
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle,
  DrawerContent,
  DrawerAppContent,
};
