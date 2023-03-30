/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import * as S from './style';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, type, title, todoDate, defaultValue, onOk, onCancel, onChange }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleOk = () => {
    if (onOk) {
      onOk();
    }
  };

  const handleCancel = () => {
    setInputValue(defaultValue);
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div css={[S.modalContainer, isOpen ? S.modalVisible : S.modalHidden]}>
      <section css={S.modalSection}>
        <header css={S.modalHeader}>
          <h2>{title}</h2>
          {type === 'prompt' && <div>{todoDate}</div>}
        </header>
        <main css={S.modalMain}>
          {type === 'prompt' && (
            <input
              type="text"
              css={S.todoModifyInput}
              value={inputValue}
              onChange={handleInputChange}
            />
          )}
          {type === 'message' && <div css={S.modalMessage}>{defaultValue}</div>}
        </main>
        <footer css={S.modalFooter}>
          <button css={[S.modalFooterButton, S.okButton]} onClick={handleOk}>
            <FaCheck css={S.checkIconCss} />
          </button>
          <button css={[S.modalFooterButton, S.cancelButton]} onClick={handleCancel}>
            <FaTimes css={S.xmarkIconCss} />
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Modal;
