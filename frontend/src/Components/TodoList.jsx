import useCompleteTodo from "../hooks/useCompleteTodo";
import { useHandleEdit } from "../hooks/useEditTodo";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

// MUI Components
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TodoList = ({
  todoList,
  activeItem,
  setActiveItem,
  inputRef,
  setEdit,
  setInput,
  setId,
}) => {
  const [open, setOpen] = useState(false); // for dialog
  const [selectedTodo, setSelectedTodo] = useState(null); // for dialog

  const handleDelete = (task) => {
    setSelectedTodo(task);
    setOpen(true);
  };

  const style = {
    width: 700,
    bgcolor: "background.paper",
  };

  return (
    <div className="todo-list">
      <List sx={style} component="nav" aria-label="todo-list">
        {todoList &&
          todoList.map((task) => {
            return (
              <div key={task.id}>
                <ListItem style={{ cursor: "pointer" }}>
                  {task.completed === true ? (
                    <ListItemText
                      onClick={() =>
                        useCompleteTodo(activeItem, setActiveItem, task)
                      }
                      primary={task.name}
                      className="completed"
                    />
                  ) : (
                    <ListItemText
                      onClick={() =>
                        useCompleteTodo(activeItem, setActiveItem, task)
                      }
                      primary={task.name}
                    />
                  )}
                  <IconButton
                    onClick={() =>
                      useHandleEdit(inputRef, setEdit, setInput, setId, task)
                    }
                    edge="end"
                    aria-label="edit"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(task)}
                    edge="end"
                    aria-label="Delete"
                  >
                    <Delete />
                  </IconButton>
                </ListItem>
                <Divider />
              </div>
            );
          })}
      </List>
      <DeleteDialog
        setOpen={setOpen}
        open={open}
        task={selectedTodo}
        setActiveItem={setActiveItem}
      />
    </div>
  );
};

export default TodoList;
