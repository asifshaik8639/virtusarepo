import React, { PropTypes } from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import expect from 'expect';

function setup() {
  const props = {
    loading: PropTypes.bool.isRequired
  };

  const enzymeWrapper = mount(<Header {...props} />);

  return {
    props,
    enzymeWrapper
  }
}
                              
describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('IndexLink').text()).toBe('Switch');
      const todoInputProps = enzymeWrapper.find('IndexLink').props();
      expect(todoInputProps.activeClassName).toBe('active');
    });
});

                              
                              