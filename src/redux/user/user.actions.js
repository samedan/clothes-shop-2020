import { SET_CURRECT_USER } from './user.types';

export const setCurrentUser = user => ({
  type: SET_CURRECT_USER,
  payload: user
});
