import * as actions from '../action-type';
import axios from 'axios';

export function getTemplateList() {
    return async(dispatch) => {
        try {
            const response = await axios.get('/template')
            dispatch({
                type: actions.GET_TEMPLATES,
                payload: response.data || []
            })
        } catch (error) {
            console.log("getTemplateList failed:::::", error);
        }

    }
}