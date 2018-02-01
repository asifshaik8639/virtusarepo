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
 //TO DO
});
