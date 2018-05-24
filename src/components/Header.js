import React, { Component } from 'react';

class Header extends Component {
  addInput(e) {
    this.props.addInput(e.target.value);
  }
  /**
   * 如果输入值为空，则不添加
   * @param {Event} e 
   */
  addTodoItem(e) {
    if (e.keyCode === 13 && e.target.value.trim() !== ''){
      this.props.addTodoItem(e.target.value);
    }
  }
  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.props.currVal}
          onKeyUp={this.addTodoItem.bind(this)}
          onChange={this.addInput.bind(this)}
        />
      </header>
    );
  }
}

export default Header;
