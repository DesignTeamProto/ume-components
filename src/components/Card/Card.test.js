import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '.';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <Card />));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
