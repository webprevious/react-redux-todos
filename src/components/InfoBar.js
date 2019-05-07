import React from 'react'

class InfoBar extends React.Component {
  render () {
    return (
      <div>
        <p>共{this.props.todos.length}条 已经完成{this.props.todos.filter(item => item.done).length}条 未完成{this.props.todos.filter(item => !item.done).length}条</p>
        <p>
          <button onClick={this.props.show.bind(null, 'all')}>显示全部</button>
          <button onClick={this.props.show.bind(null, 'yes')}>显示已完成</button>
          <button onClick={this.props.show.bind(null, 'no')}>显示未完成</button>
        </p>
      </div>
    )
  }
}

export default InfoBar