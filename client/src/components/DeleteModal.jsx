import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { deleteUser } = useAppContext();

  const removeUser = () => {
    deleteUser();
    navigate("/");
  };

  return (
    <div>
      <button className="btn ml-8 px-6 bg-slate-500" onClick={handleOpen}>
        Delete User
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="mb-10 text-3xl text-center">Are you sure?</h2>
          <div className="flex justify-around">
            <button
              onClick={handleClose}
              className="btn px-7 text-xl bg-slate-500"
            >
              No
            </button>
            <button
              onClick={removeUser}
              className="btn px-7 text-xl bg-slate-500"
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
