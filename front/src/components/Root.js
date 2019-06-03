import React from 'react'
import { Provider } from 'react-redux'
import {
  ListMemo,
  CreateMemo,
  UpdateMemo,
  Login,
  Logout,
} from '../containers/index'
import {
  LoginMenu,
  ListUser,
  CreateUser,
  EditUser,
} from '../components/index'
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
          <Menu.Item key='2'><NavLink to='/sign_up'>Sign up</NavLink></Menu.Item>
          <Menu.Item key='3'><NavLink to='/log_in'>Log in</NavLink></Menu.Item>
          <Menu.Item key='4'><NavLink to='/account_list'>AccountList</NavLink></Menu.Item>
          <Menu.Item key='5'><NavLink to='/sign_out'>Sign out</NavLink></Menu.Item>
          <Menu.Item key='6'><LoginMenu /></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px'}}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Route exact path="/" component={ListMemo} />
        <Route path="/create" component={CreateMemo} />
        <Route path="/update/:id" component={UpdateMemo} />
        <Route path="/sign_up" component={CreateUser} />
        <Route path="/log_in" component={Login} />
        <Route path="/sign_out" component={Logout} />
        <Route path="/account_list" component={ListUser} />
        <Route path="/account_update/:id" component={EditUser} />
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
