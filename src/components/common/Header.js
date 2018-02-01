import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <Link to="/home" activeClassName="active">Home</Link>
      {" | "}
      <IndexLink to="/" activeClassName="active">Switch</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Redux Thunk</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
      {" | "}
      <Link to="/reduxobservables" activeClassName="active">Redux Observables</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
      {" | "}
      <Link to="/reduxsaga" activeClassName="active">Redux Saga</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
       {" | "}
      <Link to="/charts" activeClassName="active">D3 Charts</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
