import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext"
import { viewUsers } from "../../services/users.services";

const columns = [
  { field: "id", headerName: "ID", width: 10 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 160,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 180,
  },
  {
    field: "number",
    type: "string",
    headerName: "Number",
    width: 180,
  },
  {
    field: "createdDate",
    headerName: "Created At",
    width: 110,
    type: "string",
  },
  {
    field: "active",
    headerName: "Active",
    width: 80,
    type: "boolean",
  },
];

const Users = () => {
  const [userContext, setUserContext] = useUser();
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await viewUsers(userContext.token);

      console.log(response);
      const users = response?.data?.data?.users?.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>

      </div>

      <DataTable slug="users" columns={columns} rows={users} setRows={setUsers} />


    </div>
  );
};

export default Users;
