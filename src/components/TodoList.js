import React, { Component } from 'react';

class TodoList extends Component {
  toggleAll(e) {
    this.props.toggleAll(e, e.target.value);
  }
  render() {
    return (
      <section className="main">
        <input
          className={this.props.list.length === 0 ? 'new-todo' : 'toggle-all'}
          type="checkbox"
          checked={
            !this.props.list.some(e => {
              return !e.complete;
            })
          }
          onChange={this.toggleAll.bind(this)}
        />
        <ul className="todo-list">{this.props.children}</ul>
      </section>
    );
  }
}

export default TodoList;
