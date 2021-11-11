const list = {
  selectList: (state) => {
    const { all, pagination, filter, filterdData } = state.list;

    return {
      ...state.list,
      pagination: {
        ...pagination,
        total: filter === "All" ? all.length : filterdData.length
      },
      absents:
        filter === "All"
          ? all.slice(
              (pagination.page - 1) * pagination.size,
              pagination.page * pagination.size
            )
          : filterdData
    };
  }
};

export const selectors = {
  list
};
