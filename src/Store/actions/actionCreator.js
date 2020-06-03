import React from "react";
import {ADD_TASK, EDIT_TASK} from "../../constants";
import {REMOVE_TASK} from "../../constants";
import {MODAL_SHOW} from "../../constants";
import {MODAL_HIDE} from "../../constants";
import {ConfirmModal} from "../../components/Modals/ConfirmModal/ConfirmModal";
import {AddOrEdit} from "../../components/Modals/AddEditModal/AddEditModal";
import {store} from "../store";


export const addTask = (id, title, text) => ({
    type: ADD_TASK,
    id,
    title,
    text,
});

export const editTask = (id, title, text) => ({
    type: EDIT_TASK,
    id,
    title,
    text,
});




export const removeTask = id => ({
    type: REMOVE_TASK,
    id
});

export const showArrOrEditModal = (note) => dispatch => dispatch(showModal({
    element: <AddOrEdit note={note}
                        onReject={() => dispatch(hideModal())}

    />
}));


export const showDeleteConfirmModal = (id, title) => dispatch => dispatch(showModal({
    element: <ConfirmModal
        title={`Delete note: ${title}`}
        question='Are you sure you want to delete this note?'
        onConfirm={async () => {
            await dispatch(removeTask(id));
            dispatch(hideModal());
        }}
        onReject={() => dispatch(hideModal())}
    />
}));

export const hideModalAction = () => dispatch => dispatch(hideModal());

export const showModal = modalData => ({
   type: MODAL_SHOW,
   modalData
});

export const hideModal = () => ({
    type: MODAL_HIDE
});

