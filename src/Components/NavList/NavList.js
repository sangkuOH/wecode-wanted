import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const NavList = (props) => {
  return (
    <NavListWrap>
      <NavListTitle onClick={() => props.history.push(`${props.url}`)}>
        <span>{props.title}</span>
        <i>></i>
      </NavListTitle>
      <NavListContents>
        {props.contents.map((el, idx) => {
          return (
            <li key={idx} onClick={() => props.history.push(`${el.url}`)}>
              {el.name}
            </li>
          );
        })}
        <More>
          <span>더보기</span>
          <i>></i>
        </More>
      </NavListContents>
    </NavListWrap>
  );
};

export default withRouter(NavList);

const NavListWrap = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  width: 20%;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;
`;

const NavListTitle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: 2em;
  width: 100%;
  padding-right: 20px;
  span {
    font-size: 15px;
    color: #333;
    line-height: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
  }
`;

const NavListContents = styled.ul`
  li {
    cursor: pointer;
    font-size: 13px;
    color: #999;
    padding: 5px 20px 5px 0;
  }
`;

const More = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  display: block;
`;
