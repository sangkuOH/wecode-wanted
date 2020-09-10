import React from "react";
import styled from "styled-components";

function SliderBtn({ arrow, onClick }) {
  return (
    <Button arrow={arrow} onClick={onClick}>
      <img
        alt="arrow"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
      />
    </Button>
  );
}
const Button = styled.button`
  position: absolute;
  right: ${(props) =>
    props.arrow === "prev"
      ? "calc((100% - 1060px) / 2 + 52px)"
      : "calc((100% - 1060px) / 2)"};
  bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.7);
  z-index: 10;
  border: none;
  padding: 0;
  cursor: pointer;
  vertical-align: top;
  transform: ${(props) => (props.arrow === "prev" ? "rotate(180deg)" : "")};

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.9);
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    right: ${(props) => (props.arrow === "prev" ? "calc(5% + 52px)" : "5%")};
  }

  @media (max-width: 767px) and (min-width: 500px) {
    right: ${(props) => (props.arrow === "prev" ? "72px" : "20px")};
  }
`;

export default SliderBtn;
