import getCookie from "../other/getCookie";

const csrftoken = getCookie('csrftoken')

const useCompleteTodo = (activeItem, setActiveItem, task) => {
    const url = `http://127.0.0.1:8000/api/task-update/${task.id}`;

    task.completed = !task.completed;
    const requestData = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({
            ...activeItem,
            completed: task.completed,
            name: task.name,
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
};

export default useCompleteTodo
