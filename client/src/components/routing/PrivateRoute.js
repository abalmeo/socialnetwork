import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  //destructuring auth
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  //Checks if user is authenticated and not loading. If is, go render component otherwise redirect to login
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to="/login" />
      ) : (
        //passing in components and any props that are loaded in if user is authentiated and not loading
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
