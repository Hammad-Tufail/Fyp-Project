import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

/**
 * @typedef {object} GridColumn
 * @property {string} field - The field name.
 * @property {string} headerName - The column header name.
 * @property {number} width - The column width.
 */

/**
 * @typedef {object} DataTableProps
 * @property {GridColumn[]} columns - The array of column definitions.
 * @property {object[]} rows - The data rows.
 * @property {string} slug - The slug string.
 */

/**
 * Data table component.
 * @param {DataTableProps} props - The component props.
 */
const DataTable = (props) => {
  const handleDelete = (id) => {
    //delete the id
    console.log(id + " has been deleted");
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
