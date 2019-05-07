import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/actions.js'

class Header extends React.Component {
  // 添加按钮
  addItem () {
    if (this.refs.addtxt.value) {
      this.props.actions.addItem(this.refs.addtxt.value)
      this.refs.addtxt.value = ''
    } else {
      alert('请输入')
    }
  }

  // 回车监控
  enterKey (e) {
    if (e.keyCode === 13) {
      this.addItem()
    }
  }

  render () {
    return (
      <div>
        <span>待做事项</span>
        {' '}
        <input type="text" ref="addtxt" onKeyDown={(this.enterKey).bind(this)}></input>
        {' '}
        <button onClick={(this.addItem).bind(this)}>添加</button>
      </div>
    )
  }
}

export default connect(null, (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
})(Header)