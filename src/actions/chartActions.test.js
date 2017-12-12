import expect from 'expect';
import * as chartActions from './chartActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';



describe('Chart Actions', () => {
  describe('loadChartSuccess', () => {
    const chartData = [{key: 0, value: 2},
                     {key: 1, value: 3},
                     {key: 2, value: 20},
                     {key: 3, value: 25},
                     {key: 4, value: 23}]; 
    const expectedAction = {
      type: types.LOAD_CHART_SUCCESS,
      chartData
    };

    const action = chartActions.loadChartSuccess(chartData);

    expect(action).toEqual(expectedAction);
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_CHART_SUCCESS when loading chart data', (done) => {
    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      { type: types.LOAD_CHART_SUCCESS      
      }
    ];     
      

    const store = mockStore({chartData: []}, expectedActions);
    store.dispatch(chartActions.loadChartsData()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect( actions[1].type).toEqual(types.LOAD_CHART_SUCCESS);
      done();
    });
  });
});
