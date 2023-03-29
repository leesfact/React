/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const menuAside = css`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 99;

  width: 300px;
  height: 100%;
  box-shadow: 1px 0px 5px 1px black;
  background-color: #454545;
  transition: left 1s ease;

  &.hidden-menu {
    left: -300px;
  }
`;

export const asideHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #dbdbdb;
  padding: 20px 5px 20px 10px;

  color: white;
  background-color: #121212;
`;





export const headerTitle = css`
  font-size: 18px;
  color: white;
  cursor: default;
`;

export const asideIcon = css`
  padding: 0px 15px;
  font-size: 18px;
  color: white;
`;

export const menuButton = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: -13px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  padding: 0;
  width: 13px;
  height: 60px;

  background-color: #454545;
  color: #ffc472;

  &:hover,
  &:active {
    background-color: #454545;
    text-shadow: 0px 0px 5px #ffc472;
  }
`;

export const menuNav = css`
  padding-top: 20px;
`;

export const menuList = css`
  padding-top: 20px;
`;

export const menuItem = css`
  display: flex;
  align-items: center;

  border-bottom: 1px solid #dbdbdb;
  padding: 0px 20px;
  height: 40px;
  background-color: #303030;

  font-size: 16px;
  color: white;

  &:hover {
    background-color: #121212;
  }
`;

export const menuItemIcon = css`
  padding: 0 10px;
  font-size: 16px;
  color: white;
`;

export const menuLink = css`
  display: flex;
  align-items: center;
  text-decoration: none;

  border-bottom: 1px solid #dbdbdb;
  padding: 0px 20px;
  height: 40px;
  background-color: #303030;

  font-size: 16px;
  color: white;

  &:hover {
    background-color: #121212;
  }
`;
