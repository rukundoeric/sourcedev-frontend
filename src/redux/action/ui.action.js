import { HIDE_CONTACT_US, SHOW_CONTACT_US } from './types';

export const hideContactUs = () => (dispatch) => {
  dispatch({
    type: HIDE_CONTACT_US,
  });
};

export const showContactUs = () => (dispatch) => {
  dispatch({
    type: SHOW_CONTACT_US,
  });
};
