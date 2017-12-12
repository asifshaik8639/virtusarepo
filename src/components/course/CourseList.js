import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';
import Rmap from '../../../node_modules/ramda/src/map';

const CourseList = ({courses}) => {
 
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {            
            Rmap(course => (<CourseListRow key={course.id} course={course} />), courses )
        }
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
