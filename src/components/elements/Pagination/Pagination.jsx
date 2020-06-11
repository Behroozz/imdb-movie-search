import React from 'react'
import { connect } from 'react-redux'
import getItems from '../../../api/getItems'

const Pagination = ({ page, totalPages, term, dispatch }) => {
  console.log(page)
  const nextPage = () => {
    if (page < totalPages) {
      getItems(term, page+= 1, dispatch)
    }
  }
  const prevPage = () => {
    if (page > 1) {
      getItems(term, page-= 1, dispatch)
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

const mapStateToProps = (state) => {
  return {
    page: parseInt(state.data.page),
    totalPages: state.data.total_pages,
    term: state.term
  }
}

export default React.memo(connect(mapStateToProps)(Pagination))