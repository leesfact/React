/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import * as S from './style';
import { AiOutlineFileText } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import Modal from '../Modal/Modal';

const Todo = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('todoList');
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(0);
  const [modifiedContent, setModifiedContent] = useState('');

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    const nowDate = new Date();
    const convertDay = (day) => {
      return day === 0
        ? '일'
        : day === 1
        ? '월'
        : day === 2
        ? '화'
        : day === 3
        ? '수'
        : day === 4
        ? '목'
        : day === 5
        ? '금'
        : '토';
    };

    const todoObj = {
      todoDate: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}(${convertDay(
        nowDate.getDay()
      )})`,
      todoDateTime: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`,
      todoContent: inputValue,
    };
    setTodoList([...todoList, todoObj]);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleModifiedContentChange = (e) => {
    setModifiedContent(e.target.value);
  };

  const openModifyModal = (id) => {
    setCurrentTodoId(id);
    setShowModifyModal(true);
  };

  const openRemoveModal = (id) => {
    setCurrentTodoId(id);
    setShowRemoveModal(true);
  };

  

  const handleModifyOk = () => {
    const modifiedTodoList = todoList.map((todoObj) => {
      if (todoObj.id === currentTodoId) {
        return {
          ...todoObj,
          todoContent: modifiedContent,
        };
      } else {
        return todoObj;
      }
    });
    setTodoList(modifiedTodoList);
    setShowModifyModal(false);
    setModifiedContent('');
  };

  const handleRemoveOk = () => {
    setCurrentTodoId(0);
    removeTodo();
    setShowRemoveModal(false);
  };

  const removeTodo = () => {
    setTodoList(
      todoList
        .slice(0, currentTodoId)
        .concat(todoList.slice(currentTodoId + 1))
        .map((todoObj, index) => ({ ...todoObj, id: index }))
    );
  };
  

  const handleClose = () => {
    setShowModifyModal(false);
    setShowRemoveModal(false);
    //setModifiedContent('');
  };

  return (
    <main css={[S.mainContainer, S.mainHidden]}>
        <header css={S.mainHeader}>
            <h1 css={S.mainTitle}>ToDo</h1>
            <div css={S.todoInputContainer}>
                <AiOutlineFileText css={S.fileTextIcon} />
                <input
                    type="text"
                    css={S.todoInput}
                    placeholder="Please enter todo..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            addTodo();
                        }
                    }}
                />
                <button css={S.addTodoButton} onClick={addTodo}>
                    <BiPlus />
                </button>
            </div>
        </header>
        <ul css={S.todoContentList}>
            {todoList.map((todoObj, index) => (
                <li
                    key={index}
                    css={S.contentContainer}
                    onClick={() => openModifyModal(index)}
                >
                    <header css={S.contentHeader}>
                        <div css={S.todoDate}>{todoObj.todoDate}</div>
                        <div css={S.todoDateTime}>{todoObj.todoDateTime}</div>
                    </header>
                    <main css={S.contentMain}>{todoObj.todoContent}</main>
                    <footer css={S.contentFooter}>
                        <button
                            css={S.modifyButton}
                            onClick={(e) => {
                                openModifyModal(index);
                            }}
                        >
                            <BsPencilSquare />
                        </button>
                        <button
                            css={S.removeButton}
                            onClick={(e) => {
                                openRemoveModal(index);
                            }}
                        >
                            <BiTrash />
                        </button>
                    </footer>
                </li>
            ))}
        </ul>
        <Modal
            isOpen={showModifyModal}
            type={"prompt"}
            title="ToDo 수정"
            todoDate={
                todoList[currentTodoId]?.todoDate +
                ' ' +
                todoList[currentTodoId]?.todoDateTime
            }
            defaultValue={todoList[currentTodoId]?.todoContent}
            onOk={handleModifyOk}
            onCancel={handleClose}
            onChange={handleModifiedContentChange}
        />
        <Modal
            isOpen={showRemoveModal}
            type={"message"}
            title="ToDo 삭제"
            onOk={handleRemoveOk}
            onCancel={handleClose}
        />
    </main>
  );
};

export default Todo;