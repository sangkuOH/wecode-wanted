import React from "react";
import styled from "styled-components";
import SettingsIcon from "@material-ui/icons/Settings";

function RecoAndPositionTitle({ contens }) {
  return (
    <RecommendText>
      <h2>
        {contens}
        <a href="#">
          <SettingsIcon
            style={{
              position: "relative",
              bottom: "-3px",
              fontSize: "24px",
              color: "#9d9d9d",
              marginLeft: "14px",
              cursor: "pointer",
            }}
          />
        </a>
      </h2>
    </RecommendText>
  );
}

const RecommendText = styled.div`
  position: relative;
  margin-bottom: 20px;

  h2 {
    display: inline-block;
    font-size: 22px;
    font-weight: 600;
    text-align: left;
    color: #333;

    a {
      color: inherit;

      &:active,
      :hover,
      :visited {
        color: inherit;
      }
    }
  }
`;

export default RecoAndPositionTitle;
