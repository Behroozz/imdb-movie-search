import React from 'react'
import { Provider } from 'react-redux'
import Container from './components/layout/Container.jsx'

import store from './state/store'

const App = () => {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
  )
}

export default React.memo(App)