/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import dotenv from 'dotenv';
import { CONTACT_US_SMS } from './types';

const { REACT_APP_API_URL_1 } = process.env;

dotenv.config();

export const contactUs = m => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_API_URL_1}/notification/new`,
      m,
    );
    dispatch({
      type: CONTACT_US_SMS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: CONTACT_US_SMS,
      payload: error.response.data,
    });
    return error.response.data;
  }
};
