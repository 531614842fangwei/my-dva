import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'

import App from './routes/app'
import routerTree from './utils/routerTree'

const { ConnectedRouter } = routerRedux
const Router = ({ history, app }) => (
  <ConnectedRouter history={history}>
    <Route
      path="/"
      render={props => (
        <App {...props}>
          <Switch>
            {routerTree.map(({ path, ...other }) => (
              <Route exact key={`/${path}`} path={`/${path}`} component={dynamic({ app, ...other })} />
            ))}
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
