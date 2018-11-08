import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '.';

configure({ adapter: new Adapter() });

describe('<Icon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <Icon icon="favorite" />
    ));
  });

  describe('Basic validation', () => {
    it('renders without crashing', () => {
      expect(wrapper).not.toBeNull();
      expect(wrapper).not.toBeUndefined();
    });
  });
});
