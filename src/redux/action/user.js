/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { CONTACT_US_SMS } from './types';

const api1 = 'https://sourcedevbackend.herokuapp.com';
const api2 = 'http://localhost:7880';
const g = false;
const api = g ? api1 : api2;
export const contactUs = m => async (dispatch) => {
  try {
    const { data } = await axios.post(`${api}/notification/new`, m);
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
