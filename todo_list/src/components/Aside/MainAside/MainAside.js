/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
// import { css } from '@emotion/react';
import * as S from './style';
import { VscChecklist } from 'react-icons/vsc';
import { BiUser } from 'react-icons/bi';
import { CgCalendar } from 'react-icons/cg';
import { Link } from 'react-router-dom';

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
          <Link  to="/userInfo" css={S.menuLink} onClick={() => setIsMenuVisible(false)}>
            <BiUser css={{ marginRight: "10px"}} />
            User Information
          </Link>
        </li>
        <li css={S.menuItem}>
          <Link to="/todo" css={S.menuLink} onClick={() => setIsMenuVisible(false)}>
            <CgCalendar css={{ marginRight: "10px"}} />
            To Do List
          </Link>
        </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MainAside;
