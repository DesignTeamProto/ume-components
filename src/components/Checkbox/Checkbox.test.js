import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from '.';

configure({ adapter: new Adapter() });

describe('<Checkbox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <Checkbox />
    ));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
