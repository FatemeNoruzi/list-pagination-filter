const Pagination = ({
  gotoFirst,
  prev,
  page,
  setPage,
  next,
  gotoEnd,
  total
}) => {
  return (
    <>
      <br />
      <button onClick={gotoFirst}> {"<<"} </button>
      <button onClick={prev}> {"<"} </button>
      {page}
      <button onClick={next}> {">"} </button>
      <button onClick={gotoEnd}> {">>"} </button>
      <br />
      <br />
      Show 10 items of {total}
      <br />
      <br />
      <label>goTo page:</label>
      <input
        type="number"
        min="1"
        max={Math.ceil(total / 10)}
        onChange={(e) => {
          setPage({ page: e.target.value });
        }}
      />
    </>
  );
};
export default Pagination;
