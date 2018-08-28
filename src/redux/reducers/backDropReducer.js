import { Map } from "immutable";
import * as actions from "./../actions/backDropActions";

let mapInit = Map({
  show: false,
  transparent: false
});

let initialize = {
	data: mapInit,
	loading: false,
	error: false
}

const backDropReducer = (state = initialize, action) => {
  switch (action.type) {
    case actions.REQUEST_SHOW_BACKDROP:
      return {
        ...state,
        loading: true
      }

      case actions.SUCCESS_SHOW_BACKDROP:
        return {
          ...state,
          data: state.data.set("show", action.payload.show).set("transparent", action.payload.transparent),
          loading: false,
          error: false
        }

      case actions.FAIL_SHOW_BACKDROP :
      return {
        ...state,
        loading: false,
        error: true
      }
  
    default:
      break;
  }
  return state;
};

export default backDropReducer;