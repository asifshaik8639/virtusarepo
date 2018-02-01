// Wallaby runs these tests in Node
// so we need to make sure that 'document' is globally available
// before we try to use 'mount()';

// TODO: put this in wallaby config
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

import { ReduxSagaPage } from './ReduxSagaPage';

xdescribe('ReduxSagaPage', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
        resultObj: [],
        errorMessage: 'error occured',  
        dataLoading: false,
        dataLoaded: false
      //,actions: { saveCourse: () => Promise.resolve() }
    };
    const enzymeWrapper = mount(<ReduxSagaPage {...props}/>);
    const clickButton = enzymeWrapper.find('input');
    expect(clickButton.prop('type')).toBe('button');
    clickButton.simulate('click');
    //expect(enzymeWrapper.state().errors.title).toBe('Title must be at least 5 characters');
  });
});
