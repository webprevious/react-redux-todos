import React from 'react'

class Item extends React.Component {
  constructor () {
    console.log('执行构造函数Item')
    super()
    this.state = {
      onEdit: false,
      test: 0
    }
  }

  // 测试修改test值
  updateTest () {
    this.setState({
      test: this.state.test + 1
    })
  }

  // 显示视图
  showContent () {
    if (this.state.onEdit) {
      return <input autoFocus ref="txt" type="text" onBlur={(this.blurHandle).bind(this)}></input>
    } else {
      return <span className={this.props.item.done ? 'done' : ''}>{this.props.item.content}</span>
    }
  }

  // 双击函数
  handleDoubleClick () {
    this.setState({
      onEdit: true
    })
  }

  // 双击后变成输入框，输入框的失去焦点函数
  blurHandle () {
    this.props.actions.updateItem(this.refs.txt.value, this.props.item.id)
    this.setState({
      onEdit: false
    })
  }

  // 删除item
  removeItem () {
    this.props.actions.removeItem(this.props.item.id)
  }

  // 勾选item
  selectItem () {
    this.props.actions.selectItem(this.props.item.id)
  }

  render () {
    return (
      <div>
        {/* item {JSON.stringify(this.props.item)}
        <div>
          <button onClick={this.props.actions.add}>按钮</button>
        </div>
        {console.log(this.props.actions)} */}
        <input type="checkbox" checked={this.props.item.done || false} onChange={(this.selectItem).bind(this)}></input>
        <span onDoubleClick={(this.handleDoubleClick).bind(this)}>{this.showContent()}</span>
        <button onClick={(this.removeItem).bind(this)}>X</button>
        {/* <div>测试组件使用connect函数升级后内部数据变化是否会引起组件重新render</div>
        <button onClick={(this.updateTest).bind(this)}>测试值{this.state.test}</button> */}
      </div>
    )
  }
}

export default Item