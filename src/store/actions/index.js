export const changeLogin = (check) => {
  return {
    type: "login_check",
    payload: check,
  };
};

export const changeModal = (active) => {
  return {
    type: "modal_active",
    payload: active,
  };
};

export const loginWhich = (which) => {
  return {
    type: "login_which",
    payload: which,
  };
};

export const dropProfile = (updown) => {
  return {
    type: "profile_drop",
    payload: updown,
  };
};
