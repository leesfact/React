import React, { useState } from "react";
import "./style";


function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim() === "") {
      return;
    }
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = () => {
    setModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    setTodoList([]);
    setModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="container">
      <aside className="menu-aside hidden-menu">
        <button className="menu-button">▶</button>

        <header className="aside-header">
          <h1 className="header-title">
            <i className="fa-regular fa-calendar-check"></i>TODOLIST
          </h1>
        </header>

        <nav className="menu-nav">
          <ul className="menu-list">
            <li className="menu-items">
              <i className="fa-regular fa-user"></i>User Information
            </li>
            <li className="menu-items">
              <i className="fa-regular fa-calendar"></i>To Do List
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-container main-hidden">
        <header className="main-header">
          <h1 className="main-title">ToDo</h1>
          <form onSubmit={handleAddTodo}>
            <div className="todo-input-container">
              <i className="fa-regular fa-file-lines"></i>
              <input
                type="text"
                className="todo-input"
                placeholder="Please enter todo..."
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
              />
              <button type="submit" className="add-todo-button">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </form>
        </header>
        <ul className="todo-content-list">
          {todoList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="delete-todo-button"
                onClick={handleDeleteTodo}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </main>
      {modalVisible && (
        <div className="modal-container">
          <div className="modal-section">
            <div className="modal-header">
              <h1 className="modal-title">ToDo 삭제</h1>
            </div>
            <div className="modal-main">
              <p className="modal-message">ToDo를 삭제하시겠습니까?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="modal-ok-button"
                onClick={handleDeleteConfirm}
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                type="button"
                className="modal-cancel-button"
                onClick={handleDeleteCancel}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
