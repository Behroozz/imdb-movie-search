import axios from 'axios'
import { get } from 'lodash'

import { DATA_FETCH } from '../config/constants'

async function getItems(term, page = 1, dispatch = () => {}) {
  try {
    dispatch({
      type: get(DATA_FETCH, 'LOADING'),
      term: term
    })
    const results = await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${term}&page=${page}`)
    dispatch({
      type: get(DATA_FETCH, 'SUCCESS'),
      payload: get(results, 'data')
    })
  } catch (e) {
    dispatch({
      type: get(DATA_FETCH, 'FAILURE'),
    })
  }
}

export default getItems
