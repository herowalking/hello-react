import React, { Component } from 'react';

class Footer extends Component {
  removeComplete() {
    this.props.removeComplete();
  }
  filter(hash, e) {
    this.props.filter(hash);
  }
  render() {
    let hasCompleteItem = this.props.list.some(e => e.complete);
    // 如果又已完成项，则显示清除完成按钮
    let clearBtn = hasCompleteItem && (
      <button className="clear-completed" onClick={this.removeComplete.bind(this)}>
        Clear completed
      </button>
    );
    let getCls = hash => (this.props.hash === hash ? 'selected' : '');
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>
            {
              this.props.list.filter(r => {
                return !r.complete;
              }).length
            }
          </strong>
          <span> item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={getCls('/')}
              onClick={this.filter.bind(this, '/')}
            >
              All
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="#/active"
              className={getCls('/active')}
              onClick={this.filter.bind(this, '/active')}
            >
              Active
            </a>
          </li>
          <span> </span>
          <li>
            <a
              href="#/completed"
              className={getCls('/completed')}
              onClick={this.filter.bind(this, '/completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {clearBtn}
      </footer>
    );
  }
}

export default Footer;
