import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import TicketWidget from './TicketWidget'
import './App.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TicketWidget />
        </div>
      </Provider>
    );
  }
}

export default App;
