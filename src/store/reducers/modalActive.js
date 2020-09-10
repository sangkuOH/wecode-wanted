const INITIAL_STATE = false;

export const modalActive = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MODAL_ACTIVE":
      return action.payload;
    default:
      return state;
  }
};
