import {createStore} from 'redux';
import counter from '../redux/reducers/counterReducer';

const store = createStore(counter);

export default store;
