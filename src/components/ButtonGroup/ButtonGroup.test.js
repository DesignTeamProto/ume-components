import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonGroup from '.';
import Button from '../Button';

configure({ adapter: new Adapter() });

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
