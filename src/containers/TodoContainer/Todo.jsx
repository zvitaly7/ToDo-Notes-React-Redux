import React, {Component} from "react";
import './todo.scss';
import List from "../../components/List/List";
import Search from "../../components/Search/Search";
import AddButton from "../../components/Buttons/AddButton/AddButton";
import {StoreContextConsumerHOC} from "../../Store/store";
import {showDeleteConfirmModal} from "../../Store/actions/actionCreator";
import {showArrOrEditModal, applyFilter} from "../../Store/actions/actionCreator";


class Todo extends Component {

    state = {
        tasks: this.props.store.getState(),
        searchInput: ''
    };

    stateUpdate = () => this.setState({tasks: this.props.store.getState()});

    onChangeSearchInput = value => {
        this.setState({searchInput: value || ''});
        console.log(this.state.searchInput);

    };

    onSubmitSearch = () => {
        const filtering = (filter) => this.props.store.dispatch(applyFilter(filter));
        filtering(this.state.searchInput);
        console.log(this.state.searchInput);
    };

    render() {
        const {tasks} = this.state.tasks;
        const removeTask = (id, title) => this.props.store.dispatch(showDeleteConfirmModal(id, title));
        const addOrEditModal = (id) => this.props.store.dispatch(showArrOrEditModal(tasks[id-1]));
        this.props.store.subscribe(this.stateUpdate);

        const isTaskExist = tasks && tasks.length > 0;
        console.log(this.state.searchInput);
        return (

            <div className="todo-main">
                <Search onChange={this.onChangeSearchInput} value={this.state.searchInput} onSubmit={this.onSubmitSearch}/>
                {isTaskExist && <List taskList={tasks} removeTask={removeTask} addOrEdit={addOrEditModal}/>}
                <AddButton addOrEdit={addOrEditModal}/>

            </div>
        );
    }
}

export default StoreContextConsumerHOC(Todo);
