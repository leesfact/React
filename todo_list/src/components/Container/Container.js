/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style';

function Container({ children }) {
    return (
      <div css={S.container}>
        {children}
      </div>
    ); 
  }

export default Container;
