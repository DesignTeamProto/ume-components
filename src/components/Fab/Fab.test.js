import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Fab from '.';

configure({ adapter: new Adapter() });

describe('<Fab />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <Fab />
    ));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
