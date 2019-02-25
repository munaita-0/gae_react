import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

class App extends React.Component {
  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    this.setState({date})
  }

  render() {
    const { date } = this.state;
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={this.handleChange} />
        <div style={{ margingTop: 20 }}>
          <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type='success' />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
