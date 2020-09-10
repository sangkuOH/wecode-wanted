export const changeLogin = (check) => {
  return {
    type: "LOGIN_CHECK",
    payload: check,
  };
};

export const changeModal = (active) => {
  return {
    type: "MODAL_ACTIVE",
    payload: active,
  };
};

export const loginWhich = (which) => {
  return {
    type: "LOGIN_WHICH",
    payload: which,
  };
};

export const dropProfile = (updown) => {
  return {
    type: "PROFILE_DROP",
    payload: updown,
  };
};
