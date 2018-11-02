import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '.';

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
