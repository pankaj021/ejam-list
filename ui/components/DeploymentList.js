import React, {useEffect} from 'react';
import {getDeploymentList} from '../actions/async/deploymentActions';
import {connect} from 'react-redux';
import DeploymentItem from './DeploymentItem';

function DeploymentList({deployments, loadInitialList}) {
    useEffect(() => {
        loadInitialList();
    }, [])

    if (deployments.length === 0) 
        return <h2 className='text-ct item'>List is empty...</h2>

    return (
        <ul>
            {deployments.map(item => {
                return (<DeploymentItem key={item._id} {...item}/>)
            })}
        </ul>
    )
}

const mapStateToProps = (state) => ({deployments: state.deployments});
const mapDispatchToProps = (dispatch) => ({
    loadInitialList: () => dispatch(getDeploymentList())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeploymentList)
