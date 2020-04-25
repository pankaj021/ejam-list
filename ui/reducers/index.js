import {combineReducers} from 'redux';
import deploymentReducer from './deploymentReducer';
import templateReducer from './templateReducer';

const rootReducer = combineReducers({deployments: deploymentReducer, templates: templateReducer});

export default rootReducer;
