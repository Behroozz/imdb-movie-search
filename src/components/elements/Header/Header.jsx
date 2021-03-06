import React, { useRef } from 'react'
import { connect } from 'react-redux'

import Pagination from '../Pagination/Pagination.jsx'
import getItems from '../../../api/getItems'

const Header = ({ dispatch  }) => {
  const inputRef = useRef(null)
  const callApi = (e) => {
    e.preventDefault()
    const term = inputRef.current.value
    getItems(term, 1, dispatch)
  }
  return (
    <div className="bg-gray-400 flex flex-wrap flex-row p-4 w-full items-center">
      <h1 className="text-2xl block md:inline text-center md:text-left w-full md:w-auto">Movie Title Search</h1>
      <form className="flex flex-grow" onSubmit={(e) => callApi(e)}>
        <input placeholder="enter movie title to search" className="flex flex-grow mt-4 md:mt-0 md:ml-4 px-2 py-2 rounded bg-gray-200 shadow-inner" ref={inputRef} />
        <button className="mt-4 md:mt-0 ml-4 py-2 px-4 bg-white hover:bg-blue-300 hover:text-white rounded" onClick={(e) => callApi(e)}>Get Results</button>
      </form>
      <Pagination />
    </div>
  )
}

export default React.memo(connect()(Header))