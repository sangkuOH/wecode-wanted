const initialState = false;

export const profileDrop = (state = initialState, action) => {
  switch (action.type) {
    case "profile_drop":
      return action.payload;
    default:
      return state;
  }
};
