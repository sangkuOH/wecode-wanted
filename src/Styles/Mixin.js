import { css } from "styled-components";
const Mixin = {
  center: (position) => css`
  display: flex;
  justify-content: ${position};
  align-items: center;
  `,
};
export default Mixin;
