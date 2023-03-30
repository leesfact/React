/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 5px;
  }
`;



export const mainContainer = css`
  margin: 10px auto;
  width: 550px;
  height: 100%;
`;

export const mainHidden = css`
  //display: none;
`;

export const mainHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const mainTitle = css`
  margin: 20px 0px 0px 20px;
  font-size: 36px;
  font-weight: 700;
`;

export const todoInputContainer = css`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 3px;
  border-bottom: 1px solid #dbdbdb;
  padding-right: 50px;
  width: 70%;
  height: 40px;
  
`;

export const fileTextIcon = css`
  font-size: 20px;
  font-weight: 400;
  margin: 8px;
  flex-shrink: 0;
`;

export const todoInput = css`
  border: none;
  outline: none;
  margin-left: 70px;
  width: calc(100% - 70px);
  height: 100%;
  font-size: 16px;
  transition: margin-left 0.5s ease;

  &:focus {
    margin-left: 10px;
    width: calc(100% - 10px);
    background-color: #fafafa;
  }
`;

export const addTodoButton = css`
  position: absolute;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: 900;
  top: 50%;
  right: 0px;
  border: none;
  padding: 5px 20px;
  height: 100%;

  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: #fafafa;
  }

  &:active {
    background-color: #f0f0f0;
  }
`;

export const todoContentList = css`
  ${customScrollbar}
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  height: 88%;
  overflow-y: auto;
`;

export const contentContainer = css`
  margin: 10px;
  width: 230px;
  height: 230px;
  box-shadow: 0px 0px 5px 1px #dbdbdb;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 10px 1px #121212;
  }
`;

export const contentHeader = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px;
  padding-bottom: 5px;
  height: 20%;
`;

export const todoDate = css`
  display: flex;
  align-items: flex-start;
  height: 100%;
  font-size: 20px;
  line-height: 15px;
`;

export const todoDateTime = css`
  display: flex;
  align-items: flex-end;
  font-size: 11px;
`;

export const contentMain = css`
  padding: 10px;
  height: 65%;
  word-break: keep-all;
  line-height: 25px;
`;

export const contentFooter = css`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  padding-top: 0;
  height: 15%;
`;

export const modifyButton = css`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  border-color: #f0f0f0;
  background-color: white;
`;

export const removeButton = css`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  border-color: #f0f0f0;
  background-color: white;
`;

