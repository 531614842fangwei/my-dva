import { getServices } from '../utils'

const services = getServices({
  getMenuData: 'menuData',
})

const initialState = {
  selectedKey: '',
  menuData: [],
}

export default {
  namespace: 'app',
  state: initialState,
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {
        if (pathname === '/home') {
          dispatch({ type: 'getMenuData' })
        }
      })
    },
    watchHistory({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const key = pathname
          .split('/')
          .slice(0, 2)
          .join('/')
        dispatch({ type: 'updateState', payload: { selectedKey: key } })
      })
    },
  },
  effects: {
    * getMenuData(_, { select, call, put }) {
      const menuData = yield select(({ app }) => app.menuData)
      if (menuData.length > 0) {
        return
      }
      const res = yield call(services.getMenuData)
      yield put({ type: 'updateState', payload: { menuData: res } })
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
