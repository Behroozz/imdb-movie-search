import React from 'react'
import renderer from 'react-test-renderer'
import { get } from 'lodash'
import { Pagination } from '../Pagination.jsx'

const mockState = {
  page : 1, 
  totalPages: 3, 
  term: 'water', 
  dispatch: () => {}
}

test('should render a pagination component', () => {
  const component = renderer.create(
    <Pagination 
      page={get(mockState, 'page')} 
      totalPages={get(mockState, 'totalPages')}
      term={get(mockState, 'term')}
      dispatch={get(mockState, 'dispatch')} 
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})