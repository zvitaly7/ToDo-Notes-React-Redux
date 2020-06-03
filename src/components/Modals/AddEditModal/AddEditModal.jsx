import React, {Component} from "react";

import {Input} from "../../Input/Input";
import {emptyNote} from "../../../constants";

import './addeditmodal.scss'
import {StoreContextConsumerHOC} from "../../../Store/store";
import {Button} from "../../Buttons/SimpleButton/Button";
import {addTask, showDeleteConfirmModal} from "../../../Store/actions/actionCreator";
import {editTask} from "../../../Store/actions/actionCreator";


export class AddEditModal extends Component {

    state = {
        note: this.props.note ? deepClone(this.props.note) : emptyNote,
        valid: true
    };


    onChangeStringFieldFactory = fieldName => value => {
        this.setState({note: {...this.props.note, [fieldName]: value}})
    };

    onTitleChange = fieldName => value => {
        console.log(value);
        value.length >= 30 || !value.trim() ? this.setState({
                valid: false,
                note: {...this.props.note, [fieldName]: value}
            }) :
            this.setState({valid: true, note: {...this.props.note, [fieldName]: value}})

    };


    addNote = () => {
        const NoteTitle = this.state.note.title;
        const NoteText = this.state.note.text;
        if (this.state.valid) {
            const addNote = (id, title, text) => this.props.store.dispatch(addTask(id, title, text));
            addNote(this.props.store.getState().tasks.length + 1, NoteTitle, NoteText);
            this.props.onReject();
        }
    };

    editNote = () => {
        const NoteTitle = this.state.note.title;
        const NoteText = this.state.note.text;
        if (this.state.valid) {
            const editNote = (id, title, text) => this.props.store.dispatch(editTask(id, title, text));
            editNote(this.state.note.id, NoteTitle, NoteText);
            this.props.onReject();
        }
    };


    render() {
        const {note} = this.state;
        console.log(this.state);
        return (
            <div className='add-modal'>
                <label className='edit-note-group'>
                    {note.emptyNote && <p className='add-modal-title'>{note.emptyNote}</p>}
                    <div className='add-modal-title'>Title:</div>
                    <Input
                        type='title'
                        className={this.state.valid === true ? 'edit-note-input' : 'edit-note-notvalid'}
                        value={note.title}
                        onChange={this.onTitleChange('title')
                        }
                    />
                    {this.state.valid === false && <p className='notvalid'>Error: max length 30 </p>}
                </label>
                <label className='edit-note-group'>
                    <div className='add-modal-title'>Your Note:</div>
                    <Input
                        type='text'
                        className='edit-note-text'
                        value={note.text}
                        onChange={this.onChangeStringFieldFactory('text')}
                    />
                </label>
                <div className='add-modal-controls'>
                    {note.id ?
                        <Button className='confirm-modal-yes' onClick={this.editNote}>Save</Button> :
                        <Button className='confirm-modal-yes' onClick={this.addNote}>Add</Button>
                    }
                    <Button className='confirm-modal-no' onClick={this.props.onReject}>Exit</Button>
                </div>
            </div>
        );

    }

};

export const AddOrEdit = StoreContextConsumerHOC(AddEditModal);

export function deepClone(obj) {
    let recipient = obj;

    if (recipient && typeof obj === "object") {
        recipient = obj instanceof Array ? [] : {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                recipient[i] = deepClone(obj[i]);
            }
        }
    }

    return recipient;
}