import React from 'react'
import { Provider } from 'react-redux'
import ListMemo from '../containers/ListMemo'
import CreateMemo from '../containers/CreateMemo'
import UpdateMemo from '../containers/UpdateMemo'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './History'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout;

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHight: '64x'}}
        >
          <Menu.Item key='1'><NavLink to='/'>Home</NavLink></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px'}}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Route exact path="/" component={ListMemo} />
        <Route path="/create" component={CreateMemo} />
        <Route path="/update/:id" component={UpdateMemo} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        prototyping by Shogo Suzuki
      </Footer>
      </Layout>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
