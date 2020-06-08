import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StoreContextConsumerHOC} from "../../Store/store";
import {selectLastModal} from "../../Store/reducers/modal";

import './modalcontainer.scss'
import {hideModalAction} from "../../Store/actions/actionCreator";


export class ModalContainerInternal extends Component {

    state = {
        modalData: this.props.store.getState()
    };

    stateUpdate = () => this.setState({modalData: this.props.store.getState()});

    modalRenderer = (closeModal) => (
        <>
            <div className='global-overlay'/>
            <div className='modal-wrapper'>
                <div className='modal-container'>
                    <div className='modal-header'>
                        <span
                            className="modal-title text-ellipsis">{selectLastModal(this.state.modalData).title || ''}</span>
                        <span className="modal-close" onClick={closeModal}>X</span>
                    </div>
                    <div className='modal-content'>{selectLastModal(this.state.modalData).element}</div>
                    <div className='modal-footer'></div>
                </div>
            </div>
        </>
    );

    render() {
        this.props.store.subscribe(this.stateUpdate);
        const closeModal = () => this.props.store.dispatch(hideModalAction());

        return selectLastModal(this.state.modalData)
            ? ReactDOM.createPortal(this.modalRenderer(closeModal), document.body)
            : null;
    }
}


export const ModalContainer = StoreContextConsumerHOC(ModalContainerInternal);