import React from 'react'
import renderer from 'react-test-renderer'
import ItemTile from '../ItemTile.jsx'

const tileMock = {
  Title: "Waterworld",
  Year: 1995,
  imdbID: "tt0114898"
}

test('should render a single item tile', () => {
  const component = renderer.create(
    <ItemTile item={tileMock} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})