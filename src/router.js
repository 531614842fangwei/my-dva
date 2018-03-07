import { Switch, Route, routerRedux } from 'dva/router'
import App from './routes/app'
import Home from './routes/home/home'
import List from './routes/list/list'

const { ConnectedRouter } = routerRedux
const Router = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <Route
        path="/"
        component={(props) => (
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
}
export default Router
