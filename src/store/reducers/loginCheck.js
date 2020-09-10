const INITIAL_STATE = false;

export const loginCheck = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_CHECK":
      return action.payload;
    default:
      return state;
  }
};
