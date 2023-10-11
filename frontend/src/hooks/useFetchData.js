import { useEffect, useState } from "react";

const useLoadData = (activeItem) => {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        const url = "http://127.0.0.1:8000/api/task-list/";

        async function getResponse() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setTodoList(data);
                // console.log('in custom hook');
            } catch (error) {
                console.log(error);
            }
        }

        getResponse();
    }, [activeItem]);

    return todoList
}

export default useLoadData
