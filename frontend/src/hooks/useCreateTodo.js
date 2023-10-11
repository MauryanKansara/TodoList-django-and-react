import getCookie from "../other/getCookie";

const csrftoken = getCookie('csrftoken')

const handleCreate = (input, activeItem, setActiveItem) => {
    const url = "http://127.0.0.1:8000/api/task-create/";

    const requestData = {
        method: "POST",
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
            setActiveItem(data)
        } catch (error) {
            console.log(error);
        }
    }

    getResponse();
};

export default handleCreate
