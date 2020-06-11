import { createStore } from 'redux'
import listingPageReducer from './reducers/listingPageReducer'

const store = createStore(listingPageReducer)

export default store
