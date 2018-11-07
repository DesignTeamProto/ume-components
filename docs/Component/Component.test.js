import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from '.';

configure({ adapter: new Adapter() });

describe('<Component />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <Component />));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
