import { get } from 'lodash'

import { DATA_FETCH } from '../../config/constants'

export const initialState = {
  isLoading: false,
  data: {
    data: [],
  },
  hasError: false,
  totalPages: 0
}

export default function ListingReducer (state = initialState, action) {
  let newState
  console.log(action)
  switch ( action.type ) {
    case DATA_FETCH.LOADING : 
      newState = {
        ...state,
        isLoading: true,
        hasError: false,
        term: action.term
      }
      console.log(newState)
      return newState
    case DATA_FETCH.SUCCESS : 
      newState = {
        ...state,
        data: get(action, 'payload'),
        isLoading: false,
        hasError: false,
        totalPages: get(action, 'payload').total_pages
      }
      console.log('success new state : ', newState)
      return newState
    case DATA_FETCH.ERROR : 
      newState = {
        ...state,
        data: {},
        isLoading: false,
        hasError: true
      }
      console.log(newState)
      return newState
    default: return state
  }
  
}