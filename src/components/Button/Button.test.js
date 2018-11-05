import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '.';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let wrapper;
  const text = 'Default';

  beforeEach(() => {
    wrapper = shallow((
      <Button>
        {text}
      </Button>));
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
