/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
// import { css } from '@emotion/react';
import * as S from './style';
import { VscChecklist } from 'react-icons/vsc';
import { BiUser } from 'react-icons/bi';
import { CgCalendar } from 'react-icons/cg';

const MainAside = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <aside css={S.menuAside} className={isMenuVisible ? "" : "hidden-menu"}>
      <header css={S.asideHeader}>
        <h1 css={S.headerTitle}>
          <VscChecklist css={{ marginRight: "10px"}} />
          TODOLIST
        </h1>
        <button css={S.menuButton} onClick={handleToggleMenu}>
          {isMenuVisible ? "◀" : "▶"}
        </button>
      </header>

      <nav css={S.menuNav}>
        <ul css={S.menuList}>
          <li css={S.menuItem}>
            <BiUser css={{ marginRight: "10px"}} />
            User Information
          </li>
          <li css={S.menuItem}>
            <CgCalendar css={{ marginRight: "10px"}} />
            To Do List
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MainAside;
