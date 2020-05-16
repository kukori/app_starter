import React from 'react'
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

const Progress = ({productsLoading, categoriesLoading}) => {
    return (
        <div>
            { (productsLoading || categoriesLoading) && <LinearProgress color="primary" />}
        </div>
    )
}

const mapStateToProps = state => ({
    productsLoading: state.shop.isLoading,
    categoriesLoading: state.shop.categoriesLoading,
});

export default connect(mapStateToProps)(Progress);
