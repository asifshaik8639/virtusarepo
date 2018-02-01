import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ChartsPage from './components/charts/ChartsPage';
import ReduxObservablesPage from './components/rxjs/ReduxObservablesPage';
import ReduxSagaPage from './components/reduxsaga/ReduxSagaPage';
import Minification from './components/minification/Minification';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="charts" component={ChartsPage} />
    <Route path="reduxobservables" component={ReduxObservablesPage} />
    <Route path="reduxsaga" component={ReduxSagaPage} />
    <Route path="minification" component={Minification} />
  </Route>
);




