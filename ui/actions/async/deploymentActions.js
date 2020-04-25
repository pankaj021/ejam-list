import * as actions from '../action-type';
import axios from 'axios';

export function getDeploymentList() {
    return async(dispatch) => {
        try {
            const response = await axios.get('/deployment')
            dispatch({
                type: actions.GET_LIST,
                payload: response.data || []
            })
        } catch (error) {
            console.log("addDeployment failed:::::", error);
        }

    }
}

export function addDeployment(deployObj) {
    return async(dispatch) => {
        try {
            const response = await axios.post('/deployment', deployObj)
            dispatch({type: actions.ADD_LIST, payload: response.data})
        } catch (error) {
            console.log("addDeployment failed:::::", error);
        }

    }
}

export function deleteDeployment(deployId) {
    return async(dispatch) => {
        try {
            await axios.delete(`/deployment/${deployId}`)
            dispatch({type: actions.DELETE_LIST, payload: deployId})
        } catch (error) {
            console.log("deleteDeployment failed:::::", error);
        }
    }
}