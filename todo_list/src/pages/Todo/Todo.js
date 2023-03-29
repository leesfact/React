import React, { useState } from "react";
import * as S from './style';

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
    <>
      <S.mainHeader>
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
      </S.mainHeader>
      <S.TodoList>
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
      </S.TodoList>
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
    </>
  );
}

export default Todo;
