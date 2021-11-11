const list = {
  setAbsent: (state, initialState, payload) => ({
    ...state,
    all: payload.all
  }),

  applyIndex: (state, payload) => ({
    ...state,
    pagination: {
      ...state.pagination,
      page: payload.page
    }
  }),
  applyFilter: (state, payload) => {
    const { filter } = payload;
    const filterd = state.all.filter((item) => item.type.title === filter);
    return {
      ...state,
      filter: filter,
      filterdData: filter === "All" ? state.all : filterd,
      pagination: {
        ...state.pagination,
        total: filter === "All" ? state.all.length : filterd.length,
        page: 1
      }
    };
  }
};

export const usecase = {
  list
};
