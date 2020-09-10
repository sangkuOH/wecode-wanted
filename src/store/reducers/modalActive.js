const INITIAL_STATE = false;

export const modalActive = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "modal_active":
      return action.payload;
    default:
      return state;
  }
};
