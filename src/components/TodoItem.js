import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  /**
   * 单项置为完成/未完成
   * @param {Number} id 
   */
  toggleSingle(id) {
    this.props.toggleSingle(id);
  }
  /**
   * 删除单条记录
   * @param {Number} id 
   */
  delete(id) {
    this.props.delete(id);
  }
  /**
   * 编辑框输入事件
   * @param {Number} id 
   * @param {Event} e 
   */
  editInput(id, e) {
    this.props.editInput(id, e.target.value);
    // state
  }
  /**
   * 按回车键时，退出编辑状态
   * @param {Number} id 
   * @param {Event} e 
   */
  editSubmit(id, e) {
    if (e.keyCode === 13) {
      this.setState({
        editing: false
      });
    }
  }
  /**
   * 双击记录项进入编辑状态
   */
  turnToEdit() {
    this.setState({
      editing: true
    });
  }
  /**
   * 失去焦点时退出编辑状态
   */
  turnToShow() {
    this.setState({
      editing: false
    });
  }
  render() {
    let itemClassName = [];
    this.props.complete && itemClassName.push('completed');
    this.state.editing && itemClassName.push('editing');
    return (
      <li
        className={itemClassName.join(' ')}
        onDoubleClick={this.turnToEdit.bind(this)}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.complete}
            onChange={this.toggleSingle.bind(this, this.props.id)}
          />
          <label>{this.props.title}</label>
          <button
            className="destroy"
            onClick={this.delete.bind(this, this.props.id)}
          />
        </div>
        <input
          className="edit"
          value={this.props.title}
          onChange={this.editInput.bind(this, this.props.id)}
          onKeyUp={this.editSubmit.bind(this, this.props.id)}
          onBlur={this.turnToShow.bind(this)}
        />
      </li>
    );
  }
}

export default TodoItem;
