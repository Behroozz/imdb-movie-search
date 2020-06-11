import React from 'react'

import Header from '../elements/Header/Header.jsx'
import ItemGrid from '../elements/ItemGrid/ItemGrid.jsx'

const Container = () => {
  return (
    <div className="flex flex-wrap bg-gray-200">
      <Header />
      <ItemGrid />
    </div>
  )
}

export default React.memo(Container)