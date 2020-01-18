import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser], // the input []
  // the fucntion that gets the return of the 'input selector(user)'
  user => user.currentUser
);
