import {createStore} from 'redux'
import reducer from './reducer'
const createstore = createStore
const store = createstore(reducer)
export default store