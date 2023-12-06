import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import Modal from "react-modal";
import { useUser } from "../../context/UserContext"
import { deleteDoctor } from "../../services/doctors.services";

// Modal styles
const customStyles = {
    content: {
        width: "50%",
        height: "50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
};

const DataTableDoc = (props) => {
    const [userContext, setUserContext] = useUser();
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const openEditModal = (id) => {
        setSelectedUserId(id);
        setEditModalIsOpen(true);
    };

    const closeEditModal = () => {
        setEditModalIsOpen(false);
    };

    const openDeleteModal = (id) => {
        setSelectedUserId(id);
        setDeleteModalIsOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalIsOpen(false);
    };

    const handleEdit = () => {
        console.log("Editing user with ID:", selectedUserId);

        closeEditModal();
    };

    const handleDelete = () => {
        console.log("Deleting user with ID:", selectedUserId);
        deleteDoctor(userContext.token, selectedUserId).then(
            (res) => {
                if (res.status == 200) {
                    props.setRows((oldValues) => oldValues.filter((doctor) => (doctor._id != selectedUserId)))
                }
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
        closeDeleteModal();
    };

    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <div
                        className="edit"
                        onClick={() => openEditModal(params.row._id)}
                    >
                        <img src="/view.svg" alt="" />
                    </div>
                    <div
                        className="delete"
                        onClick={() => openDeleteModal(params.row._id)}
                    >
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            );
        },
    };
    return (
        <div className="dataTable">
            <DataGrid

                getRowId={(row) => row._id}
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
            {/* Edit Modal */}
            <Modal
                isOpen={editModalIsOpen}
                onRequestClose={closeEditModal}
                style={customStyles}
                contentLabel="Edit Modal"
            >
                <div className="text-center p-4">
                    <h2 className="text-lg font-semibold  mb-4">Edit Doctor</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Edit Name"
                            className="border p-2 w-full rounded focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Edit Number"
                            className="border p-2 w-full rounded focus:outline-none focus:border-blue-500 mt-2"
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleEdit}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                        >
                            Edit
                        </button>
                        <button
                            onClick={closeEditModal}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Delete Modal */}
            <Modal
                isOpen={deleteModalIsOpen}
                onRequestClose={closeDeleteModal}
                style={customStyles}
                contentLabel="Delete Modal"
            >
                <div className="text-center p-4">
                    <h2 className="text-lg font-semibold mb-4">Delete Doctor</h2>
                    <p className="mb-4">Are you sure you want to delete this Doctor?</p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                        >
                            Delete User
                        </button>
                        <button
                            onClick={closeDeleteModal}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DataTableDoc;
