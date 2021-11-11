import { types } from "./types";
import { models } from "./models";
import { usecase } from "./usecase";
const list = (state = models.list, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.list.SET_ABSENT:
      return usecase.list.setAbsent(state, models.list, payload);
    case types.list.SET_INDEX:
      return usecase.list.applyIndex(state, payload);
    case types.list.SET_FILTER:
      return usecase.list.applyFilter(state, payload);
    default:
      return state;
  }
};

const absent = (state, { type, payload = {}, meta = {} }) => {
  return {
    list: list(state.list, { type, payload, meta })
  };
};
export { absent };
