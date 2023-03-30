import { css } from '@emotion/react';

export const modalContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000dd;
`;

export const modalVisible = css`
  display: flex;
`;

export const modalHidden = css`
  display: none;
`;

export const modalSection = css`
  border-radius: 2px;
  padding: 2px;
  width: 350px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 1px #000000;
`;

export const modalHeader = css`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  height: 20%;
`;

export const modalMain = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 60%;
  background-color: #fff;
`;

export const modalMessage = css`
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
`;

export const todoModifyInput = css`
  margin-top: 10px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 35px;
  text-align: center;
`;

export const modalFooter = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 10px;
  height: 20%;
`;

export const modalFooterButton = css`
  margin-left: 5px;
`;

export const okButton = css`
  ${modalFooterButton};
  width: 30px;
  height: 30px;
`;

export const cancelButton = css`
  ${modalFooterButton};
  width: 30px;
  height: 30px;
`;

export const checkIconCss = css`
  font-size: 16px;
`;

export const xmarkIconCss = css`
  font-size: 16px;
`;
