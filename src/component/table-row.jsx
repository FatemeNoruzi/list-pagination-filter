const TableRow = ({ data, page }) => {
  return (
    <>
      {data.map((item) => (
        <tr>
          <td>
            {item.firstName} {item.lastName}
          </td>
          <td>{item.time} h</td>
          <td>{item.type.title}</td>
          <td>{item.admin_des}</td>
          <td>{item.user_des}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
