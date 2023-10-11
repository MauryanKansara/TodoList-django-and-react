const useDeleteTodo = (setActiveItem, setOpen, task) => {
    const url = `http://127.0.0.1:8000/api/task-delete/${task.id}`;

    const requestData = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
    };

    async function getResponse() {
        try {
            const response = await fetch(url, requestData);
            // const data = await response.json(); // no use of data here, kem ke a khali "Item deleted successfully j return karse darr vakhte"
            setActiveItem(Math.random()); // setting activeItem to random integer, etle aapde page ne re-render kari sakiye.
        } catch (error) {
            console.log(error);
        }
    }

    getResponse();
    setOpen(false);
};

export default useDeleteTodo
