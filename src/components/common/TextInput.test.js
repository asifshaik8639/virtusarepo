import React, { PropTypes } from 'react';
import { mount } from 'enzyme';
import TextInput from './TextInput';
import expect from 'expect';
import sinon from 'sinon';

function setup() {
  const props = {
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      placeholder: PropTypes.string.isRequired,
      value: 'react architecture',
      error: PropTypes.string
  };

  const enzymeWrapper = mount(<TextInput {...props} />);

  return {
    props,
    enzymeWrapper
  };
}
                              
describe('TextInput', () => {
    it('should render self ', () => {
    const { enzymeWrapper } = setup();
   expect(enzymeWrapper.find('.form-control').text()).toBe('');

    const InputProps = enzymeWrapper.find('input').props();
    expect(InputProps.type).toBe('text');
    });
});
    
    
describe('', () => {
    
    it('should dispatch onchange event when changing the text in the input', () => {
    const props = {
      name: 'PropTypes.string.isRequired',
      label: 'PropTypes.string.isRequired',
      onChange: sinon.spy(),
      placeholder: 'Type valid text here',
      value: 'Search for the course',
      error: PropTypes.string,
      likeComment: sinon.spy(),
    }

    const enzymeWrapper = mount(<TextInput {...props} />)

    enzymeWrapper.find('input').simulate('change');
    expect(props.onChange.calledOnce).toEqual(true);
  })
    
});    
    

                              
                              