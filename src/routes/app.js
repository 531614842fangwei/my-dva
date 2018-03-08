import React from 'react'
import { connect } from 'dva'
import { get } from 'lodash'
import { Layout, Menu, Icon } from 'antd'
import { Link, Redirect } from 'dva/router'
import PropTypes from 'prop-types'
import './app.less'

const { Header, Sider, Content } = Layout
const Item = Menu.Item
// 获取可用的第一个页面路径
const getTargetUrl = (menuData) => {
  let redirectUrl = '/404'
  const homeApplicationUrl = get(menuData, ['0', 'menuUrl'])
  const firstMenuUrl = get(menuData, ['0', 'children', '0', 'menuUrl'])
  if (firstMenuUrl) {
    return `/${homeApplicationUrl}/${firstMenuUrl}`
  } else if (homeApplicationUrl) {
    return `/${homeApplicationUrl}`
  }
  return redirectUrl
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      siderCollapsed: false,
    }
  }
  toggleCollapsed = () => {
    this.setState({ siderCollapsed: !this.state.siderCollapsed })
  }
  render() {
    const siderCollapsed = this.state.siderCollapsed
    const { location, app } = this.props
    const { pathname } = location
    const { menuData, selectedKey } = app
    if (pathname === '/') {
      // 如果输入的地址为空，应该重定向到目标页面
      let redirectUrl = getTargetUrl(menuData) // 目标页面链接生成
      return <Redirect to={redirectUrl} />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={siderCollapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
            {menuData.map(menu => (
              <Item key={`/${menu.menuUrl}`}>
                <Icon type="user" />
                <span>{menu.menuName}</span>
                <Link to={`/${menu.menuUrl}`} />
              </Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleCollapsed}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

App.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
  app: PropTypes.object,
}
export default connect(({ app, loading }) => ({ app, loading }))(App)
