import React, { useState } from "react";
import styled from "styled-components";
const FilterModal = ({ children, display, modalHandler }) => {
  return (
    <ModalWrapper display={display}>
      <ModalBackDrop onClick={modalHandler}></ModalBackDrop>
      <ModalBox>{children}</ModalBox>
    </ModalWrapper>
  );
};

export default FilterModal;

const ModalWrapper = styled.div`
  ${({ display }) => (display ? "" : "display: none;")}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px soild red;
`;

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 310px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0, 0, 10px rgba(0, 0, 0, 0.25);
  z-index: 120;
`;
