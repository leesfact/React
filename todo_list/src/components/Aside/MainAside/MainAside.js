/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Navigation } from 'react-minimal-side-navigation/lib';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { FaAngleLeft, FaAngleRight, FaUsers } from 'react-icons/fa';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const MainAside = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navigate = useNavigate();

  const items = [
    {
      title: 'Home',
      itemId: '/',
      elemBefore: () => <HiHome />,
    },
    {
      title: 'T1',
      itemId: '/t1',
      elemBefore: () => <GrTest />,
    },
    {
      title: 'T2',
      itemId: '/t2',
      elemBefore: () => <GrTest />,
    },
    {
      title: 'Sample',
      itemId: '/sample/input/1',
      elemBefore: () => <BsCardChecklist />,
      subNav: [
        {
          title: 'input1',
          itemId: '/sample/input/1',
          elemBefore: () => <BiListCheck />
        }
      ]
    },
    {
      title: 'List',
      itemId: '/users',
      elemBefore: () => <BsCardChecklist />,
      subNav: [
        {
          title: '사용자 전체 조회',
          itemId: '/users',
          elemBefore: () => <FaUsers />
        }
      ]
    },
    {
      title: 'TodoList',
      itemId: '/todo',
      elemBefore: () => <BsCardChecklist />
    },
    {
      title: 'NumberCounter',
      itemId: '/number/counter',
      elemBefore: () => <BsCardChecklist />
    }
  ];

  return (
    <aside
      css={[
        S.style,
        {
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        },
      ]}
    >
      <button onClick={() => setIsMenuOpen(prev => !prev)}>
         {isMenuOpen ? (
          <>
            <FaAngleLeft /> 나가기
          </>
        ) : (
           <FaAngleRight />
        )}
      </button>
      <Navigation
        activeItemId="/"
        onSelect={({ itemId }) => {
          navigate(itemId);
        }}
        items={items}
      />
      <button onClick={() => setIsMenuOpen(true)}>
        <FaAngleRight />
      </button>
    </aside>
  );
  
};

export default MainAside;
