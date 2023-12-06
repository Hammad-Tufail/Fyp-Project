import DataTableDoc from "../../components/dataTable/DataTableDoc";
import "./doctors.scss";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext"
import { viewDoctors } from "../../services/doctors.services";

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
        field: "specialization",
        headerName: "Specialization",
        width: 110,
        type: "string",
    },
];

const Doctors = () => {
    const [userContext, setUserContext] = useUser();
    const [open, setOpen] = useState(false);
    const [doctors, setDoctors] = useState([]);

    const getDoctors = async () => {
        try {
            const response = await viewDoctors(userContext.token);

            console.log(response);
            const doctors = response?.data?.data?.doctors?.map((doctor, index) => ({
                ...doctor,
                id: index + 1,
            }));
            setDoctors(doctors);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDoctors();
    }, []);

    return (
        <div className="doctors">
            <div className="info">
                <h1>Doctors</h1>

            </div>

            <DataTableDoc slug="doctors" columns={columns} rows={doctors} setRows={setDoctors} />


        </div>
    );
};

export default Doctors;
