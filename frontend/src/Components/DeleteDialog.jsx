import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import { forwardRef } from "react";
import useDeleteTodo from "../hooks/useDeleteTodo";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteDialog({ open, setOpen, task, setActiveItem }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Are you sure you want to delete this todo?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {task && task.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Disagree</Button>
          <Button onClick={() => useDeleteTodo(setActiveItem, setOpen, task)}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
