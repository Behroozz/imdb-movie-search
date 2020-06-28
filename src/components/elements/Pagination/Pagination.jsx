import React, { useContext, useState, useEffect } from 'react'

import getItems from '../../../api/getItems'
import { DataContext } from '../../../context/DataContext.jsx'

export const Pagination = () => {
  
  const { data:dataContext, term:termContext } = useContext(DataContext)
  const [data, setData] = dataContext
  const [page, setPage] = useState(1)
  const [term] = termContext
  let totalPages = 1
  
  useEffect(()=> {
    getItems(term, page, setData)
  }, [page])
  
  if (data.total_pages) {
    totalPages = data.total_pages
  }

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  return (
    <React.Fragment>
      {totalPages > 0 &&
        <div className="mt-4 ml-4">
          <span className="block w-full text-center md:inline md:w-auto md:text-left">Page {page} of {totalPages}</span>
          <button className="px-4 ml-4 bg-white rounded" onClick={() => prevPage()}>Previous Page</button>
          <button className="px-4 ml-4 bg-white rounded" onClick={() => nextPage()}>Next Page</button>
        </div>
      }
    </React.Fragment>
  )
}

export default React.memo(Pagination)
