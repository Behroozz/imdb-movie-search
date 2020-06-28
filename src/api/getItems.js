import axios from 'axios'

async function getItems(term, page = 1, setData) {
  try {
    const results = await axios.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${term}&page=${page}`)
    setData(results.data)
  } catch (e) {
    setData([])
  }
}

export default getItems
