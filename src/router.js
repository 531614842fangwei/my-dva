import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, routerRedux } from 'dva/router'
import App from './routes/app'
import Home from './routes/home/home'
import List from './routes/list/list'

const { ConnectedRouter } = routerRedux
const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <Route
      path="/"
      render={props => (
        <App {...props}>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/List" component={List} />
          </Switch>
        </App>
      )}
    />
  </ConnectedRouter>
)

Router.propTypes = {
  history: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
}

export default Router
