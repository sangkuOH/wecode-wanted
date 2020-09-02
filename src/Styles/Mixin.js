import { css } from "styled-components";

const mixIn = {
  center: (position) => css`
    display: flex;
    justify-content: ${position};
    align-items: center;
  `,
};
export default mixIn;
