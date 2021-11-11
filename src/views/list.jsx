import { useEffect, useState } from "react";
import NoData from "../component/no-data";
import Pagination from "../component/pagination";
import TableHeader from "../component/table-header";
import TableRow from "../component/table-row";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../application";
import Filter from "../component/filter";

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectors.list.selectList);
  const { page, total } = list.pagination;
  const { absents, all } = list;

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const setPage = (index) => dispatch(actions.list.setIndex(index));
  const prev = () => setPage({ page: page - 1 });
  const next = () => setPage({ page: page + 1 });
  const gotoFirst = () => setPage({ page: 1 });
  const gotoEnd = () => setPage({ page: Math.ceil(all.length / 10) });

  const getData = async () => {
    const data = await import("../data/adsent.json")
      .then((mod) => {
        setMessage("");

        setTimeout(function () {
          setLoading(false);
        }, 3000);

        return mod.default;
      })
      .catch((err) => {
        setMessage("There is a problem to get Data.");
      });

    dispatch(actions.list.setAbsent({ all: data }));
  };

  const handleTableBody = () => {
    if (!absents.length) return <NoData />;
    return <TableRow data={absents} page={page} />;
  };

  const showLoading = () => (
    <img src="https://loading.io/mod/spinner/spin/sample.gif" />
  );

  const showDataError = () => (
    <label style={{ color: "red", textAlign: "center" }}>{message}</label>
  );

  const handelView = () => {
    if (loading) {
      return showLoading();
    }
    if (message) {
      return showDataError();
    }
    return (
      <>
        <table>
          <TableHeader />
          {handleTableBody()}
        </table>

        <Pagination
          gotoFirst={gotoFirst}
          prev={prev}
          page={page}
          setPage={setPage}
          next={next}
          gotoEnd={gotoEnd}
          total={total}
        />
      </>
    );
  };

  useEffect(() => {
    getData();
    dispatch(actions.list.setIndex({ page: 1 }));
  }, []);

  const setFilter = (event) => {
    dispatch(actions.list.setFilter({ filter: event.value }));
  };

  return (
    <>
      <Filter setFilter={setFilter} />

      {handelView()}
    </>
  );
};

export default List;
