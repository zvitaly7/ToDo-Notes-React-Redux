import {ADD_TASK, REMOVE_TASK, EDIT_TASK, APPLY_FILTER} from "../../constants";
import {TASKS} from "./ExampleStorage";


const tasks = (state = {allTasks: TASKS, filtered: TASKS}, {id, title, text, type}) => {

    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    title,
                    text,

                }
            ];
        case EDIT_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.id = id;
                    task.title = title;
                    task.text = text;
                }
                return task;
            });

        case APPLY_FILTER:
            if (!title) {
                return state;
            }
            return [...state].filter((task) => task.title.toLowerCase().includes(title.toLowerCase()));


        case REMOVE_TASK:
            return [...state.allTasks].filter(task => task.id !== id);

        default:
            return state.allTasks;
    }
};

export default tasks;