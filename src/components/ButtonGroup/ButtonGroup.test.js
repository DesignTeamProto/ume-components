import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from '.';
import Button from '../Button';

describe('<ButtonGroup />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <ButtonGroup>
        <Button />
      </ButtonGroup>));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
    it('has child element', () => {
      expect(wrapper).toHaveProperty('children');
      expect(wrapper.children()).toHaveLength(1);
    });
  });
});
