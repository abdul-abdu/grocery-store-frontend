import { fetchWithTokens } from "../clients";
import { user_action_types as c } from "./constants";
import {
  getAllCats,
  getAllCatsFailure,
  getAllCatsSuccess,
} from "./cartActions";

export const getUser = () => ({
  type: c.GET_USER,
});

export const getUserSuccess = (user) => ({
  type: c.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = (error) => ({
  type: c.GET_USER_FAILURE,
  payload: error,
});

export function fetchUser(signal) {
  return async (dispatch) => {
    dispatch(getUser());
    dispatch(getAllCats());

    try {
      const res = await fetchWithTokens.get("/api/users/me", {
        signal,
      });

      if (res.statusText === "OK") {
        dispatch(getUserSuccess(res.data.user));
        dispatch(getAllCatsSuccess(res.data.carts));
      }
    } catch (error) {
      dispatch(getUserFailure(error));
      dispatch(getAllCatsFailure());
    }
  };
}
