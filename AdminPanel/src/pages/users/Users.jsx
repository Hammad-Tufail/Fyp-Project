import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { useEffect, useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import axios, { Axios } from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 120,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {

  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admins/users");
      console.log(response);
      const allUsers = response.data.users;
      console.log(allUsers);
      setUsers(allUsers);

    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
