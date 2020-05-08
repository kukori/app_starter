import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, isLoading, ...rest }) => (
    <Route {...rest} render={props => !isAuthenticated && !isLoading ? (<Redirect to='/login' />) : (<Component {...props} />) } />
);

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    isLoading: state.user.isLoading
});

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default connect( mapStateToProps)(PrivateRoute);
