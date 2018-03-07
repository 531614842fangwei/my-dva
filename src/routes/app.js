import React from 'react'
import { connect } from 'dva'
import { Layout, Menu, Icon } from 'antd'
import { Redirect } from 'dva/router'
import PropTypes from 'prop-types'
import './app.less'

const { Header, Sider, Content } = Layout
const getTargetUrl = () => '/home'
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
    const { muenData } = app
    if (pathname === '/') {
      // 如果输入的地址为空，应该重定向到目标页面
      let redirectUrl = getTargetUrl(muenData) // 目标页面链接生成
      return <Redirect to={redirectUrl} />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={siderCollapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
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
