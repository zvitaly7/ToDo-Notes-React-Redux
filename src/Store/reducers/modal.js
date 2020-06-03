import {ADD_TASK, MODAL_HIDE, MODAL_SHOW, REMOVE_TASK} from "../../constants";


const initialState = {
    list: []
};


const reducerMapping = {
    [MODAL_SHOW]: (state, modalData) => {
        const list = [...state.list];
        list.push(modalData);

        return {
            ...state,
            list,
        };
    },

    [MODAL_HIDE]: (state) => {
        const list = [...state.list];
        list.pop();

        return {
            ...state,
            list,
        };
    },
};


export const modals = (state = initialState, {type, modalData}) => {
    return reducerMapping[type] ? reducerMapping[type](state, modalData) : state
};

export const selectLastModal = state => state.modals.list.length ? state.modals.list[state.modals.list.length - 1] : null ;
