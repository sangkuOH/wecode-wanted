const INITIAL_STATE = "default";

export const loginWhich = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "login_which":
      return action.payload;
    default:
      return state;
  }
};
