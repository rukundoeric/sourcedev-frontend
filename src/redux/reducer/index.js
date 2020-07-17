import { combineReducers } from "redux";
import uiReducer from "./ui.reducer";
import userReducer from "./user.reducer";


export default combineReducers({
  ui: uiReducer,
  user: userReducer,
});
