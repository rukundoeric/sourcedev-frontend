import { HIDE_CONTACT_US, SHOW_CONTACT_US } from "../action/types";

const initialState = {
  display_contact_us: false,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case HIDE_CONTACT_US:
      return {
        ...state,
        display_contact_us: false,
      };
    case SHOW_CONTACT_US:
      return {
        ...state,
        display_contact_us: true,
      };
    default:
      return state;
  }
};
