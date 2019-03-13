import React from 'react'
import { Provider } from 'react-redux'
import ListMemo from '../containers/ListMemo'
import CreateMemo from '../containers/CreateMemo'
import UpdateMemo from '../containers/CreateMemo'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './History'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <ul>
          <li><NavLink to='/'>List</NavLink></li>
          <li><NavLink to='/create'>Create</NavLink></li>
        </ul>
        <Route exact path="/" component={ListMemo} />
        <Route path="/create" component={CreateMemo} />
        <Route path="/update/:id" component={UpdateMemo} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
