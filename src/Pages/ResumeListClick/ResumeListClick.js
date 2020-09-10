import React from "react";
import styled from "styled-components";
import { API } from "../../config";

const ResumeListToggle = (props) => {
  const DeleteFetch = () => {
    const token = localStorage.getItem("token");
    fetch(`${API}/cv/delete/${props.id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }).then(props.resumeListToggle);
  };

  return (
    <>
      <ToggleBox toggle={props.toggle} id={props.id}>
        <ul>
          <li onClick={() => props.getFunc}>이름 변경</li>
          <li>다운로드</li>
          <li onClick={DeleteFetch}>삭제</li>
        </ul>
      </ToggleBox>
    </>
  );
};

export default ResumeListToggle;

const ToggleBox = styled.div`
  display: ${(props) => (props.toggle === props.id ? "block" : "none")};
  background-color: white;
  z-index: 100;
  border: 1px solid #d2d2d2;
  position: absolute;
  bottom: -75px;
  right: 15px;
  width: 160px;
  height: 90px;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 0;
    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 100%;
      font-size: 14px;
      padding-left: 10%;
      color: #272b33;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;
