import React from 'react'
import { get } from 'lodash'

const ItemTile = ({ item }) => {
  const smallImage = item.image || 'https://via.placeholder.com/400'
  const medImage = item.image || 'https://via.placeholder.com/640'
  const largeImage = item.image || smallImage
  return (
    <div className="mt-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2">
      <div className="bg-white h-full py-2 px-4">
        <h3 className="text-xl">{get(item, 'Title')}</h3>
        <h4>Year : {get(item, 'Year')}</h4>
        <img className="w-full" sizes="" srcSet={`${smallImage}, ${medImage}, ${largeImage}`} />
        <a className="mt-4 text-blue-500 block" target="_blank" href={`https://imdb.com/title/${get(item, 'imdbID')}`}>See more information on {get(item, 'Title')}</a>
      </div>
    </div>
  )
}

export default React.memo(ItemTile)