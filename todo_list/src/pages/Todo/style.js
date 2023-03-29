import { css } from "@emotion/react";

export const main = css`
  margin: 10px auto;
  width: 550px;
  height: 100%;

  &.main-hidden {
    display: none;
  }
`;

export const mainHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const mainTitle = css`
  margin: 20px 0px 0px 20px;
  font-size: 36px;
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

  .fa-file-lines {
    font-size: 20px;
    margin: 8px;
  }

  input[type="text"] {
    padding: 0 70px;
    width: 100%;
    height: 100%;
    transition: padding 0.5s ease;

    &:focus {
      padding: 0px 10px;
    }
  }

  button.add-todo-button {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0px;

    border: none;
    padding: 5px 20px;
    height: 100%;
  }
`;

export const todoContentList = css`
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

  button.modify-button,
  button.remove-button {
    border: none;
    padding: 5px;
  }
`;
