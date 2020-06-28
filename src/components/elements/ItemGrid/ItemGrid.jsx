import React, { useContext } from 'react'

import { DataContext } from '../../../context/DataContext.jsx'
import ItemTile from '../ItemTile/ItemTile.jsx'

export const ItemGrid = () => {
  const { data:contextData, term:contextTerm } = useContext(DataContext)
  const [data] = contextData
  const [term] = contextTerm
  const items = data.data || []
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

export default React.memo(ItemGrid)