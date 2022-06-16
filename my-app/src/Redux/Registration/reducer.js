import { Reg_FAILURE, Reg_SUCCESS } from "./actionTypes";

const initial = {
  massage: "",
  error: "",
};
export const RegistorReducer = (state = initial, action) => {
  switch (action.type) {
    case Reg_SUCCESS: {
      return {
        ...state,

        massage: action.payload,
      };
    }
    case Reg_FAILURE: {
        return {
          ...state,
  
          error: action.payload,
        };
      }
    default: {
      return { ...state };
    }
  }
};