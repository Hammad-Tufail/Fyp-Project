import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 90, height: '100%' },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },

  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },

  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
