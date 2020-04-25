import React from 'react'
import {connect} from 'react-redux';
import {deleteDeployment} from '../actions/async/deploymentActions'

function DeploymentItem({_id, name, version, deployedAt, deleteItem}) {
    return (
        <li className='list-item'>
            <span className='item'>{name}</span>
            <span className='item'>{version}</span>
            <span className='item'>{deployedAt}</span>
            <span className='item item-delete'>
                <img src='/icons/delete.svg' alt='delete' onClick={() => deleteItem(_id)}></img>
            </span>

        </li>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (deleteId) => dispatch(deleteDeployment(deleteId))
})

export default connect(null, mapDispatchToProps)(DeploymentItem);