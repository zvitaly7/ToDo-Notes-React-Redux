import React, {Component} from "react";
import './todo.scss';
import List from "../../components/List/List";
import Search from "../../components/Search/Search";
import AddButton from "../../components/Buttons/AddButton/AddButton";
import {StoreContextConsumerHOC} from "../../Store/store";
import {showDeleteConfirmModal} from "../../Store/actions/actionCreator";
import {showArrOrEditModal, applyFilter} from "../../Store/actions/actionCreator";


class Todo extends Component {

    constructor(props) {
        super(props);

        const {tasks} = this.props.store.getState();
        this.state = {
            tasks: tasks.filtered,
            searchInput: '',
        };

        this.props.store.subscribe(this.stateUpdate);
    }


    stateUpdate = () => {
        const {tasks} = this.props.store.getState();
        this.setState({
            tasks: tasks.filtered
        });
    };

    onChangeSearchInput = value => {
        this.setState({searchInput: value || ''});
        console.log(this.state.searchInput);

    };

    onSubmitSearch = () => {
        const filtering = (filter) => this.props.store.dispatch(applyFilter(filter));
        filtering(this.state.searchInput);
        console.log(!this.state.searchInput);
    };

    render() {
        const {tasks} = this.state;
        const removeTask = (id, title) => this.props.store.dispatch(showDeleteConfirmModal(id, title));
        const addOrEditModal = (id) => this.props.store.dispatch(showArrOrEditModal(tasks[id - 1]));


        const isTaskExist = tasks && tasks.length > 0;
        return (

            <div className="todo-main">
                <Search onChange={this.onChangeSearchInput} value={this.state.searchInput}
                        onSubmit={this.onSubmitSearch}/>
                {isTaskExist && <List taskList={tasks} removeTask={removeTask} addOrEdit={addOrEditModal}/>}
                <AddButton addOrEdit={addOrEditModal}/>

            </div>
        );
    }
}

export default StoreContextConsumerHOC(Todo);
