import React from 'react'
import InfoBar from './InfoBar.js'
import Item from './Item.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions.js'

class Main extends React.Component {
  constructor () {
    console.log('执行构造函数')
    super()
    this.state = {
      test: 0,
      // 标识展示all、yes、no
      status: 'all'
    }
  }

  // 测试修改test值
  updateTest () {
    this.setState({
      test: this.state.test + 1
    })
  }

  show (status) {
    this.setState({
      status
    })
  }

  render () {
    let self = this
    let filterTodos = (function () {
      if (self.state.status === 'all') {
        return self.props.todos
      } else if (self.state.status === 'yes') {
        return self.props.todos.filter(item => item.done)
      } else if (self.state.status === 'no') {
        return self.props.todos.filter(item => !item.done)
      } 
    })()
    return (
      <div>
        <ul>
          {filterTodos.map((item, index) => {
            return <Item key={index} item={item} actions={this.props.actions}/>
          })}
          {/* {console.log(this.props.actions)} */}
        </ul>
        <InfoBar todos={filterTodos} show={(this.show).bind(this)}></InfoBar>
        {/* <div>测试组件使用connect函数升级后内部数据变化是否会引起组件重新render</div>
        <button onClick={(this.updateTest).bind(this)}>测试值{this.state.test}</button> */}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      todos: state.todos
    }
  },
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
)(Main)