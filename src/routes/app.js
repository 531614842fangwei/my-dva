import React from 'react'
import PropTypes from 'prop-types'

const App = ({ children }) => <div>App外壳{children}</div>

App.propTypes = {
  children: PropTypes.object,
}
export default App
