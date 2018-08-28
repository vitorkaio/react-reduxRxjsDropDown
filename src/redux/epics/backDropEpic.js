import "rxjs-compat";
import * as actions from "./../actions/backDropActions";
import ApiService from "./../../services/ApiService";

export const backDropEpic = (action$, store) => {
  return action$
  .ofType(actions.REQUEST_SHOW_BACKDROP)
  .switchMap(async (action) => { 
    const backDropState = await ApiService.showBackDrop(action.payload.show, action.payload.transparent);
    console.log("Acessando state: ", store.value.backDropReducer);
    return actions.successBackDrop(backDropState.show, backDropState.transparent);
  });

}
