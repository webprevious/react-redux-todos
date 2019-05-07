import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer/index.js'
import { Provider } from 'react-redux'
import Header from './components/Header.js'
import Main from './components/Main.js'

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  </Provider>
  ,
  document.getElementById('app')
)

