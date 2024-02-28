
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../utils/datatablesource";
import React,{ useState } from "react";
import styles from '../../styles/datatable.module.css';
import { Box } from "@mui/material";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Box  style={{ textDecoration: "none" }}>
              <div className={styles.viewButton}>View</div>
            </Box>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        Add New User
        <Box className={styles.NextLink}>
          Add New
        </Box>
      </div>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
