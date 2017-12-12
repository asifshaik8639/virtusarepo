import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import toastr from 'toastr';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';

import Revolve from '../../../node_modules/ramda/src/evolve';
import Rfilter from '../../../node_modules/ramda/src/filter';

import concat from '../../../node_modules/lodash/concat';
import sortBy from '../../../node_modules/lodash/sortBy';
import map from '../../../node_modules/lodash/map';
import sample from '../../../node_modules/lodash/sample';

// Example: sortBy
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];

const exampleSortBy = sortBy(users, function(o) { return o.user; });
console.log(' lodash exampleSortBy used here ===>',exampleSortBy);

// Example: map
const exampleMap = map(users, 'user');
console.log(' lodash exampleMap used here ===>',exampleMap);

// Example: concat
const array = [1];
const exampleConcat = concat(array, 2, [3], [[4]]);
console.log(' lodash exampleConcat used here ===>',exampleConcat);

// Example: sample
const exampleSample = sample([1, 2, 3, 4]);
console.log(' lodash exampleSample used here ===>',exampleSample);




export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      course: Revolve({}, this.props.course),
      errors: {},
      saving: false
    };  

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({course: Revolve({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  courseFormIsValid() {
    let formIsValid = true;
    const errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();     
    if (!this.courseFormIsValid()) return;

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving} />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getCourseById(courses, id) {   
  
  let course = Rfilter(course  => course.id === id, courses);    
  if (course) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;

  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course: course,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
