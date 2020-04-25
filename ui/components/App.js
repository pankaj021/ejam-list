import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getTemplateList} from '../actions/async/templateActions'
import DeploymentList from './DeploymentList';
import './style.css'
import DeploymentForm from './DeploymentForm';

const App = ({loadTemplates}) => {
    useEffect(() => {
        loadTemplates()
    }, [])
    return (
        <Fragment>
            <DeploymentForm/>
            <DeploymentList/>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadTemplates: () => dispatch(getTemplateList())
})

export default connect(null, mapDispatchToProps)(App);