import { types } from "./types";
const list = {
  setAbsent: (payload) => ({
    type: types.list.SET_ABSENT,
    payload
  }),

  setIndex: (payload) => ({
    type: types.list.SET_INDEX,
    payload
  }),
  setFilter: (payload) => ({
    type: types.list.SET_FILTER,
    payload
  })
};

export const actions = {
  list
};
