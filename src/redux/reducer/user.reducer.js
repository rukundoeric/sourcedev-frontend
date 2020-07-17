import { CONTACT_US_SMS } from "../action/types";

const initalState = {
  contactUsResponce: {},
};

export default (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_US_SMS:
      return {
        ...state,
        contactUsResponce: payload,
      };
    default:
      return state;
  }
};
