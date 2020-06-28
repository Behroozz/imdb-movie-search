import React from 'react'

import { DataContextProvider } from './context/DataContext.jsx'
import Container from './components/layout/Container.jsx'

const App = () => {
  return (
    <DataContextProvider>
      <Container/>
    </DataContextProvider>
  )
}

export default React.memo(App)