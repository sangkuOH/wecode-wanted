import { combineReducers } from "redux";
import { loginCheck } from "./loginCheck";
import { loginWhich } from "./loginWhich";
import { modalActive } from "./modalActive";
import { profileDrop } from "./profileDrop";

const rootReducer = combineReducers({
  loginCheck,
  loginWhich,
  modalActive,
  profileDrop,
});
export default rootReducer;
