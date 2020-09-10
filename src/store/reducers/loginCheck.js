const INITIAL_STATE = false;

export const loginCheck = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "login_check":
      return action.payload;
    default:
      return state;
  }
};
