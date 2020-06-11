import React from 'react'
import renderer from 'react-test-renderer'
import { ItemGrid } from '../ItemGrid.jsx'

const dataMock = [
  {
    Title: "Waterworld",
    Year: 1995,
    imdbID: "tt0114898"
  },
  {Title: "The Making of 'Waterworld'", Year: 1995, imdbID: "tt2670548"},
  {Title: "Waterworld 4: History of the Islands", Year: 1997, imdbID: "tt0161077"},
  {Title: "Waterworld", Year: 1997, imdbID: "tt0455840"},
  {Title: "Waterworld", Year: 1997, imdbID: "tt0390617"},
  {Title: "Swordquest: Waterworld", Year: 1983, imdbID: "tt2761086"},
  {Title: "Behind the Scenes of the Most Fascinating Waterworld on Earth: The Great Backwaters, Kerala.", Year: 2014, imdbID: "tt5847056"},
  {Title: "Louise's Waterworld", Year: 1997, imdbID: "tt0298417"},
  {Title: "Waterworld", Year: 2001, imdbID: "tt0381702"},
]

test('should render a grid of 9 items', () => {
  const component = renderer.create(
    <ItemGrid items={dataMock} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})