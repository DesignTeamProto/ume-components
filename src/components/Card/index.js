import React from 'react';
import BaseCard, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from '@material/react-card';
import styled from 'styled-components';
import './Card.scss';

const StyledCard = styled(BaseCard)`
  border-radius: 2px;
`;

const Card = () => (
  <StyledCard>
    <CardPrimaryContent>
      <h1>Header</h1>
      <CardMedia imageUrl="https://images.unsplash.com/photo-1541536556867-5c6a7d3cc064?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e109615d3a4f8d7dcb05fb3765aec86&auto=format&fit=crop&w=1350&q=80" />
    </CardPrimaryContent>

    <CardActions>
      <CardActionButtons>
        <button>Click Me</button>
      </CardActionButtons>

      <CardActionIcons>
        <i>Click Me Too!</i>
      </CardActionIcons>
    </CardActions>
  </StyledCard>
);


export default Card;
