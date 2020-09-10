const initialState = false;

export const profileDrop = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_DROP":
      return action.payload;
    default:
      return state;
  }
};
