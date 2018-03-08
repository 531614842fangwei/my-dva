export default {
  namespace: 'app',
  state: {
    selectedKey: '',
    menuData: [
      {
        menuId: '58C5988AC32E4D969BE785EC9048F0A2',
        menuName: '主页',
        menuParentId: '-1',
        hasMenu: null,
        menuUrl: 'home',
        menuIcon: 'user',
        children: [],
      },
      {
        menuId: 'F4621486C44345A3BCC358A176B900C7',
        menuName: '列表页',
        menuParentId: '-1',
        hasMenu: null,
        menuUrl: 'list',
        menuIcon: 'team',
        children: [],
      },
    ],
  },
  subscriptions: {
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
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
