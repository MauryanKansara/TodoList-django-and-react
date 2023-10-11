import getCookie from "../other/getCookie";

const csrftoken = getCookie('csrftoken')

export const useHandleEdit = (inputRef, setEdit, setInput, setId, task) => {
    setEdit(true);

    inputRef.current.focus();
    console.log(inputRef.current.value);
    setInput(task.name);
    setId(task.id);
};

export const useHandleEditOnSubmit = (activeItem, input, setActiveItem, id, setEdit) => {
    const url = `http://127.0.0.1:8000/api/task-update/${id}`;

    const requestData = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
            ...activeItem,
            name: input,
        }),
    };

    async function getResponse() {
        try {
            const response = await fetch(url, requestData);
            const data = await response.json();
            setActiveItem(data);
        } catch (error) {
            console.log(error);
        }
    }

    getResponse();
    setEdit(false);
};
