import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import TodoList from './components/TodoList.js';
import TodoItem from './components/TodoItem.js';

class App extends Component {
  constructor(props) {
    super(props);
    // 太多重复绑定，一起处理
    [
      'addTodoItem',
      'toggleSingle',
      'toggleAll',
      'addInput',
      'editInput',
      'removeComplete',
      'delete',
      'filter'
    ].forEach(r => {
      this[r] = this[r].bind(this);
    });
    /**
     * hash 用于记录当前哈希值，筛选记录
     * currVal 输入框当前值，新值加入数组后要重置该值，因此要状态提升
     */
    this.state = {
      hash: '/',
      currVal: '',
      name: 'todos',
      todos: []
    };
  }
  /**
   * 设置过滤参数
   * @param {String} hash 点击筛选按钮所携带的值
   */
  filter(hash) {
    this.setState({
      hash: hash
    });
  }
  /**
   * 添加待办项
   * @param {*} val
   */
  addTodoItem(val) {
    let arr = this.state.todos.concat([{ complete: false, title: val }]);
    this.setState({
      todos: arr,
      currVal: ''
    });
  }
  /**
   * 全部置为完成/未完成
   */
  toggleAll() {
    let arr = [...this.state.todos];
    let checked = !arr.some((e, i) => {
      return !e.complete;
    });
    arr.forEach(e => {
      e.complete = !checked;
    });
    this.setState({
      todos: arr
    });
  }
  /**
   * 删除已完成的事项
   */
  removeComplete() {
    let arr = this.state.todos.filter(r => !r.complete);
    this.setState({
      todos: arr
    });
  }
  /**
   * 删除单个事项
   * @param {Number} id
   */
  delete(id) {
    let arr = [...this.state.todos];
    arr.splice(id, 1);
    this.setState({ todos: arr });
  }
  /**
   * 将单个事项置为完成/未完成
   * @param {*} id
   */
  toggleSingle(id) {
    let arr = [].concat(this.state.todos);
    arr[id].complete = !arr[id].complete;
    this.setState({
      todos: arr
    });
  }
  /**
   * 设置输入框值
   * @param {String} value
   */
  addInput(value) {
    this.setState({
      currVal: value
    });
  }
  /**
   * 修改某个事项的title
   * @param {*} id 数组下标
   * @param {String} value 输入框值
   */
  editInput(id, value) {
    let arr = [].concat(this.state.todos);
    arr[id].title = value;
    this.setState({
      todos: arr
    });
    // xxx....
  }
  render() {
    let isNotEmptyList = this.state.todos.length !== 0;
    return (
      <section className="todoapp">
        <Header
          title={this.state.name}
          addTodoItem={this.addTodoItem}
          currVal={this.state.currVal}
          addInput={this.addInput}
        />
        {isNotEmptyList && (
          <TodoList list={this.state.todos} toggleAll={this.toggleAll}>
            {this.state.todos.map((r, i) => {
              // 如果当前过滤项为激活或全部,并且该项为激活
              let showActive =
                ['/', '/active'].indexOf(this.state.hash) !== -1 && !r.complete;
              // 如果当前过滤项为完成或全部，并且该项为完成
              let showCompleted =
                ['/', '/completed'].indexOf(this.state.hash) !== -1 &&
                r.complete;
              // 满足以上任一条件则显示
              let showItem = showCompleted || showActive;
              return (
                showItem && (
                  <TodoItem
                    key={i}
                    id={i}
                    complete={r.complete}
                    title={r.title}
                    toggleSingle={this.toggleSingle}
                    delete={this.delete}
                    editInput={this.editInput}
                  />
                )
              );
            })}
          </TodoList>
        )}
        {isNotEmptyList && (
          <Footer
            list={this.state.todos}
            removeComplete={this.removeComplete}
            filter={this.filter}
            hash={this.state.hash}
          />
        )}
      </section>
    );
  }
}

export default App;
