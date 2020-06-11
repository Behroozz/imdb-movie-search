import React from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'

import ItemTile from '../ItemTile/ItemTile.jsx'


export const ItemGrid = ({ items, term }) => {
  console.log(items)
  return (
    <React.Fragment>
      {term && <h2 className="ml-4 mt-4">Results for {term}</h2>}
      <div className="w-full flex flex-wrap mt-4 pb-4 px-2">
        
        {
          items.length > 0 && items.map(item => <ItemTile key={item.imdbID} item={item} />)
        }
        {
          items.length === 0 && <div>No results</div>
        }
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.data.data,
    term: state.term
  }
}

export default React.memo(connect(mapStateToProps)(ItemGrid))