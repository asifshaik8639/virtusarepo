import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import ReduxObservablesTestPage from './ReduxObservablesPage';

xdescribe('<ReduxObservablesTestPage/>', function () {
  xit('should have an image to display the gravatar', function () {
    const wrapper = mount(<ReduxObservablesTestPage/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  xit('should have props for email and src', function () {
    const wrapper = mount(<ReduxObservablesTestPage/>);
    expect(wrapper.props().data).to.be.defined;
    expect(wrapper.props().dataLoading).to.be.defined;
      expect(wrapper.props().dataLoaded).to.be.defined;
  });
});