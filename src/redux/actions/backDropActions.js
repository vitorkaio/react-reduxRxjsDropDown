export const REQUEST_SHOW_BACKDROP = "REQUEST_SHOW_BACKDROP";
export const SUCCESS_SHOW_BACKDROP = "SUCCESS_SHOW_BACKDROP";
export const FAIL_SHOW_BACKDROP = "FAIL_SHOW_BACKDROP";

export const showBackDrop = (show, transparent) => {
  return {
    type: REQUEST_SHOW_BACKDROP,
    payload: {
      show: show,
      transparent: transparent
    }
  };
};

export const successBackDrop = (show, transparent) => {
  return {
    type: SUCCESS_SHOW_BACKDROP,
    payload: {
      show: show,
      transparent: transparent
    }
  };
};