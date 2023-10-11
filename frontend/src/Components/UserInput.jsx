import { useHandleEditOnSubmit } from "../hooks/useEditTodo";
import useCreateTodo from "../hooks/useCreateTodo";

// MUI components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const UserInput = ({
  edit,
  setEdit,
  id,
  activeItem,
  setActiveItem,
  input,
  inputRef,
  setInput,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    else {
      if (edit === true) {
        useHandleEditOnSubmit(activeItem, input, setActiveItem, id, setEdit);
      } else {
        useCreateTodo(input, activeItem, setActiveItem);
      }
    }
    setInput("");
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Enter todo"
        variant="outlined"
        style={{ marginRight: "1rem" }}
        value={input}
        inputRef={inputRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default UserInput;
