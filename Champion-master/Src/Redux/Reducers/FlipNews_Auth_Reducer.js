import { LOGIN } from "../Action/types";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
