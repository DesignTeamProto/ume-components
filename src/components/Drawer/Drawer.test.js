import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Drawer from '.';

configure({ adapter: new Adapter() });

describe('<Drawer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <Drawer />));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
