import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
      {" | "}
      <Link to="/reduxobservables" activeClassName="active">Redux Observables</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
      {" | "}
      <Link to="/reduxsaga" activeClassName="active">Redux Saga</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
       {" | "}
      <Link to="/charts" activeClassName="active">Charts</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
      {" | "}
      <Link to="/minification" activeClassName="active">App Minification Pie Chart</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
