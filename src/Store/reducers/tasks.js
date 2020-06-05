import {ADD_TASK, REMOVE_TASK, EDIT_TASK, APPLY_FILTER} from "../../constants";
import {TASKS} from "./ExampleStorage";


const tasks = (state = {allTasks: TASKS, filtered: TASKS, searchInput: ''}, {id, title, text, type}) => {

    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                allTasks: [...state.allTasks, {id, title, text}]
            };

        case EDIT_TASK:
            return {
                ...state,
                allTasks: state.allTasks.map(task => {
                    if (task.id === id) {
                        return {id, title, text};
                    }
                    return {...task};
                }),
            };

        case APPLY_FILTER:
            return {
                ...state,
                searchInput: title,
                filtered: state.allTasks.filter((task) => task.title.toLowerCase().includes((title || '').toLowerCase()))

            };


        case REMOVE_TASK:
            return {
                ...state,
                allTasks: state.allTasks.filter(task => task.id !== id),
            };

        default:
            return state;
    }
};

export default tasks;